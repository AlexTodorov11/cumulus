'use strict';

const router = require('express-promise-router')();
const isBoolean = require('lodash/isBoolean');

const asyncOperations = require('@cumulus/async-operations');
const {
  CollectionPgModel,
  getKnexClient,
  GranulePgModel,
  translateApiGranuleToPostgresGranule,
} = require('@cumulus/db');
const {
  DeletePublishedGranule,
  RecordDoesNotExist,
} = require('@cumulus/errors');
const { indexGranule } = require('@cumulus/es-client/indexer');
const { Search } = require('@cumulus/es-client/search');
const Logger = require('@cumulus/logger');
const {
  deconstructCollectionId,
} = require('@cumulus/message/Collections');

const { deleteGranuleAndFiles } = require('../src/lib/granule-delete');
const { asyncOperationEndpointErrorHandler } = require('../app/middleware');
const AsyncOperation = require('../models/async-operation');
const Collection = require('../models/collections');
const Granule = require('../models/granules');
const { moveGranule } = require('../lib/granules');
const { unpublishGranule } = require('../lib/granule-remove-from-cmr');
const { addOrcaRecoveryStatus, getOrcaRecoveryStatusByGranuleId } = require('../lib/orca');

const logger = new Logger({ sender: '@cumulus/api/granules' });

/**
 * List all granules for a given collection.
 *
 * @param {Object} req - express request object
 * @param {Object} res - express response object
 * @returns {Promise<Object>} the promise of express response object
 */
async function list(req, res) {
  const { getRecoveryStatus, ...queryStringParameters } = req.query;
  const es = new Search(
    { queryStringParameters },
    'granule',
    process.env.ES_INDEX
  );

  let result = await es.query();
  if (getRecoveryStatus === 'true') {
    result = await addOrcaRecoveryStatus(result);
  }

  return res.send(result);
}

/**
 * Update a single granule.
 * Supported Actions: reingest, move, applyWorkflow, RemoveFromCMR.
 *
 * @param {Object} req - express request object
 * @param {Object} res - express response object
 * @returns {Promise<Object>} the promise of express response object
 */
async function put(req, res) {
  const {
    granuleModel = new Granule(),
    knex = await getKnexClient(),
    granulePgModel = new GranulePgModel(),
    esClient = await Search.es(),
  } = req.testContext || {};

  const granuleId = req.params.granuleName;
  const body = req.body;
  const action = body.action;

  if (!action) {
    const apiGranule = req.body;
    const oldGranule = await granuleModel.get({ granuleId });
    let newGranule;

    apiGranule.updatedAt = Date.now();
    apiGranule.createdAt = oldGranule.createdAt;
    const postgresRule = await translateApiGranuleToPostgresGranule(apiGranule, knex);

    try {
      await knex.transaction(async (trx) => {
        await granulePgModel.upsert(trx, postgresRule);
        newGranule = await granuleModel.create(apiGranule);
        await indexGranule(esClient, newGranule, process.env.ES_INDEX);
      });
    } catch (innerError) {
      // Revert Dynamo record update if any write fails
      await granuleModel.create(oldGranule);
      throw innerError;
    }
    return res.send(newGranule);
  }

  const granule = await granuleModel.get({ granuleId });

  if (action === 'reingest') {
    const { name, version } = deconstructCollectionId(granule.collectionId);
    const collectionModelClient = new Collection();
    const collection = await collectionModelClient.get({ name, version });

    await granuleModel.reingest({
      ...granule,
      queueUrl: process.env.backgroundQueueUrl,
    });

    const response = {
      action,
      granuleId: granule.granuleId,
      status: 'SUCCESS',
    };

    if (collection.duplicateHandling !== 'replace') {
      response.warning = 'The granule files may be overwritten';
    }

    return res.send(response);
  }

  if (action === 'applyWorkflow') {
    await granuleModel.applyWorkflow(
      granule,
      body.workflow,
      body.meta
    );

    return res.send({
      granuleId: granule.granuleId,
      action: `applyWorkflow ${body.workflow}`,
      status: 'SUCCESS',
    });
  }

  if (action === 'removeFromCmr') {
    await unpublishGranule(knex, granule);

    return res.send({
      granuleId: granule.granuleId,
      action,
      status: 'SUCCESS',
    });
  }

  if (action === 'move') {
    const filesAtDestination = await granuleModel.getFilesExistingAtLocation(
      granule,
      body.destinations
    );

    if (filesAtDestination.length > 0) {
      const filenames = filesAtDestination.map((file) => file.fileName);
      const message = `Cannot move granule because the following files would be overwritten at the destination location: ${filenames.join(', ')}. Delete the existing files or reingest the source files.`;

      return res.boom.conflict(message);
    }

    await moveGranule(
      granule,
      body.destinations,
      process.env.DISTRIBUTION_ENDPOINT,
      granuleModel
    );

    return res.send({
      granuleId: granule.granuleId,
      action,
      status: 'SUCCESS',
    });
  }

  return res.boom.badRequest('Action is not supported. Choices are "applyWorkflow", "move", "reingest", or "removeFromCmr"');
}

/**
 * Delete a granule
 *
 * @param {Object} req - express request object
 * @param {Object} res - express response object
 * @returns {Promise<Object>} the promise of express response object
 */
async function del(req, res) {
  const {
    granuleModelClient = new Granule(),
    collectionPgModel = new CollectionPgModel(),
    granulePgModel = new GranulePgModel(),
    knex = await getKnexClient(),
    esClient = await Search.es(),
  } = req.testContext || {};

  const granuleId = req.params.granuleName;
  logger.info(`granules.del ${granuleId}`);

  let dynamoGranule;
  let pgGranule;

  // If the granule does not exist in Dynamo, throw an error
  try {
    dynamoGranule = await granuleModelClient.getRecord({ granuleId });
  } catch (error) {
    if (error instanceof RecordDoesNotExist) {
      return res.boom.notFound(error);
    }
    throw error;
  }

  // If the granule does not exist in PG, just log that information. The logic that
  // actually handles Dynamo/PG granule deletion will skip the PG deletion if the record
  // does not exist. see deleteGranuleAndFiles().
  try {
    if (dynamoGranule.collectionId) {
      const { name, version } = deconstructCollectionId(dynamoGranule.collectionId);
      const collectionCumulusId = await collectionPgModel.getRecordCumulusId(
        knex,
        { name, version }
      );
      // Need granule_id + collection_cumulus_id to get truly unique record.
      pgGranule = await granulePgModel.get(knex, {
        granule_id: granuleId,
        collection_cumulus_id: collectionCumulusId,
      });
    }
  } catch (error) {
    if (error instanceof RecordDoesNotExist) {
      logger.info(`Postgres Granule with ID ${granuleId} does not exist`);
    } else {
      throw error;
    }
  }

  if (dynamoGranule.published) {
    throw new DeletePublishedGranule('You cannot delete a granule that is published to CMR. Remove it from CMR first');
  }

  await deleteGranuleAndFiles({
    knex,
    dynamoGranule,
    pgGranule,
    esClient,
  });

  return res.send({ detail: 'Record deleted' });
}

/**
 * Query a single granule.
 *
 * @param {Object} req - express request object
 * @param {Object} res - express response object
 * @returns {Promise<Object>} the promise of express response object
 */
async function get(req, res) {
  const { getRecoveryStatus } = req.query;
  const granuleId = req.params.granuleName;
  let result;
  try {
    result = await (new Granule()).get({ granuleId });
  } catch (error) {
    if (error.message.startsWith('No record found')) {
      return res.boom.notFound('Granule not found');
    }

    throw error;
  }

  const recoveryStatus = getRecoveryStatus === 'true'
    ? await getOrcaRecoveryStatusByGranuleId(granuleId)
    : undefined;
  return res.send({ ...result, recoveryStatus });
}

function validateBulkGranulesRequest(req, res, next) {
  const payload = req.body;

  if (!payload.ids && !payload.query) {
    return res.boom.badRequest('One of ids or query is required');
  }

  if (payload.ids && !Array.isArray(payload.ids)) {
    return res.boom.badRequest(`ids should be an array of values, received ${payload.ids}`);
  }

  if (!payload.query && payload.ids && payload.ids.length === 0) {
    return res.boom.badRequest('no values provided for ids');
  }

  if (payload.query
    && !(process.env.METRICS_ES_HOST
        && process.env.METRICS_ES_USER
        && process.env.METRICS_ES_PASS)
  ) {
    return res.boom.badRequest('ELK Metrics stack not configured');
  }

  if (payload.query && !payload.index) {
    return res.boom.badRequest('Index is required if query is sent');
  }

  return next();
}

async function bulkOperations(req, res) {
  const payload = req.body;

  if (!payload.workflowName) {
    return res.boom.badRequest('workflowName is required.');
  }
  const stackName = process.env.stackName;
  const systemBucket = process.env.system_bucket;
  const tableName = process.env.AsyncOperationsTable;

  let description;
  if (payload.query) {
    description = `Bulk run ${payload.workflowName} on ${payload.query.size} granules`;
  } else if (payload.ids) {
    description = `Bulk run ${payload.workflowName} on ${payload.ids.length} granules`;
  } else {
    description = `Bulk run on ${payload.workflowName}`;
  }

  const asyncOperation = await asyncOperations.startAsyncOperation({
    asyncOperationTaskDefinition: process.env.AsyncOperationTaskDefinition,
    cluster: process.env.EcsCluster,
    lambdaName: process.env.BulkOperationLambda,
    description,
    operationType: 'Bulk Granules',
    payload: {
      payload,
      type: 'BULK_GRANULE',
      envVars: {
        GranulesTable: process.env.GranulesTable,
        system_bucket: process.env.system_bucket,
        stackName: process.env.stackName,
        invoke: process.env.invoke,
        METRICS_ES_HOST: process.env.METRICS_ES_HOST,
        METRICS_ES_USER: process.env.METRICS_ES_USER,
        METRICS_ES_PASS: process.env.METRICS_ES_PASS,
      },
    },
    esHost: process.env.ES_HOST,
    stackName,
    systemBucket,
    dynamoTableName: tableName,
    knexConfig: process.env,
  }, AsyncOperation);

  return res.status(202).send(asyncOperation);
}

/**
 * Start an AsyncOperation that will perform a bulk granules delete
 *
 * @param {Object} req - express request object
 * @param {Object} res - express response object
 * @returns {Promise<Object>} the promise of express response object
 */
async function bulkDelete(req, res) {
  const payload = req.body;

  if (payload.forceRemoveFromCmr && !isBoolean(payload.forceRemoveFromCmr)) {
    return res.boom.badRequest('forceRemoveFromCmr must be a boolean value');
  }

  const stackName = process.env.stackName;
  const systemBucket = process.env.system_bucket;
  const tableName = process.env.AsyncOperationsTable;

  const asyncOperation = await asyncOperations.startAsyncOperation({
    asyncOperationTaskDefinition: process.env.AsyncOperationTaskDefinition,
    cluster: process.env.EcsCluster,
    lambdaName: process.env.BulkOperationLambda,
    description: 'Bulk granule deletion',
    operationType: 'Bulk Granule Delete', // this value is set on an ENUM field, so cannot change
    payload: {
      type: 'BULK_GRANULE_DELETE',
      payload,
      envVars: {
        cmr_client_id: process.env.cmr_client_id,
        CMR_ENVIRONMENT: process.env.CMR_ENVIRONMENT,
        cmr_oauth_provider: process.env.cmr_oauth_provider,
        cmr_password_secret_name: process.env.cmr_password_secret_name,
        cmr_provider: process.env.cmr_provider,
        cmr_username: process.env.cmr_username,
        GranulesTable: process.env.GranulesTable,
        launchpad_api: process.env.launchpad_api,
        launchpad_certificate: process.env.launchpad_certificate,
        launchpad_passphrase_secret_name: process.env.launchpad_passphrase_secret_name,
        METRICS_ES_HOST: process.env.METRICS_ES_HOST,
        METRICS_ES_USER: process.env.METRICS_ES_USER,
        METRICS_ES_PASS: process.env.METRICS_ES_PASS,
        stackName: process.env.stackName,
        system_bucket: process.env.system_bucket,
        ES_HOST: process.env.ES_HOST,
      },
    },
    stackName,
    systemBucket,
    dynamoTableName: tableName,
    knexConfig: process.env,
  }, AsyncOperation);

  return res.status(202).send(asyncOperation);
}

async function bulkReingest(req, res) {
  const payload = req.body;
  const stackName = process.env.stackName;
  const systemBucket = process.env.system_bucket;
  const tableName = process.env.AsyncOperationsTable;

  const numOfGranules = (payload.query && payload.query.size)
    || (payload.ids && payload.ids.length);
  const description = `Bulk granule reingest run on ${numOfGranules || ''} granules`;

  const asyncOperation = await asyncOperations.startAsyncOperation({
    asyncOperationTaskDefinition: process.env.AsyncOperationTaskDefinition,
    cluster: process.env.EcsCluster,
    lambdaName: process.env.BulkOperationLambda,
    description,
    operationType: 'Bulk Granule Reingest',
    payload: {
      payload,
      type: 'BULK_GRANULE_REINGEST',
      envVars: {
        GranulesTable: process.env.GranulesTable,
        system_bucket: process.env.system_bucket,
        stackName: process.env.stackName,
        invoke: process.env.invoke,
        METRICS_ES_HOST: process.env.METRICS_ES_HOST,
        METRICS_ES_USER: process.env.METRICS_ES_USER,
        METRICS_ES_PASS: process.env.METRICS_ES_PASS,
      },
    },
    esHost: process.env.ES_HOST,
    stackName,
    systemBucket,
    dynamoTableName: tableName,
    knexConfig: process.env,
  }, AsyncOperation);

  return res.status(202).send(asyncOperation);
}

router.get('/:granuleName', get);
router.get('/', list);
router.put('/:granuleName', put);
router.post(
  '/bulk',
  validateBulkGranulesRequest,
  bulkOperations,
  asyncOperationEndpointErrorHandler
);
router.post(
  '/bulkDelete',
  validateBulkGranulesRequest,
  bulkDelete,
  asyncOperationEndpointErrorHandler
);
router.post(
  '/bulkReingest',
  validateBulkGranulesRequest,
  bulkReingest,
  asyncOperationEndpointErrorHandler
);
router.delete('/:granuleName', del);

module.exports = {
  put,
  router,
};

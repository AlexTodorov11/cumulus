'use strict';

import Logger from '@cumulus/logger';

import { Context } from 'aws-lambda';

const asyncOperations = require('@cumulus/async-operations');

const logger = new Logger({ sender: '@cumulus/migration-helper-async-operation' });

export interface HandlerEvent {
  prefix: string,
  operationType: string
}

exports.handler = async (event: HandlerEvent, context: Context) => {
  const { operationType } = event;

  if (!['DLA Migration', 'ReconciliationReport Migration'].includes(operationType)) {
    const errorMessage = `${operationType} is not supported`;
    throw new Error(errorMessage);
  }

  logger.info(`About to start async operation for ${operationType}`);
  const description = operationType === 'DLA Migration'
    ? 'Migrate Dead Letter Archive Messages' : 'Migrate Reconciliation Reports';
  const asyncOperation = await asyncOperations.startAsyncOperation({
    asyncOperationTaskDefinition: process.env.AsyncOperationTaskDefinition,
    cluster: process.env.EcsCluster,
    callerLambdaName: context.functionName,
    description,
    knexConfig: process.env,
    lambdaName: process.env.DlaMigrationLambda,
    operationType,
    payload: event,
    stackName: process.env.stackName,
    systemBucket: process.env.system_bucket,
    useLambdaEnvironmentVariables: true,
  });

  logger.info(`Started async operation ${asyncOperation.id} for ${operationType} ${description}`);
  return asyncOperation;
};

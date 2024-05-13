'use strict';

const test = require('ava');
const cryptoRandomString = require('crypto-random-string');
const range = require('lodash/range');
const { StatsSearch } = require('../../dist/search/StatsSearch');

const {
  destroyLocalTestDb,
  generateLocalTestDb,
  GranulePgModel,
  CollectionPgModel,
  fakeCollectionRecordFactory,
  fakeGranuleRecordFactory,
  fakeProviderRecordFactory,
  migrationDir,
  fakePdrRecordFactory,
  fakeExecutionRecordFactory,
  PdrPgModel,
  ExecutionPgModel,
  ProviderPgModel,
} = require('../../dist');

const testDbName = `collection_${cryptoRandomString({ length: 10 })}`;

test.before(async (t) => {
  const { knexAdmin, knex } = await generateLocalTestDb(
    testDbName,
    migrationDir
  );

  t.context.knexAdmin = knexAdmin;
  t.context.knex = knex;

  t.context.collectionPgModel = new CollectionPgModel();
  t.context.granulePgModel = new GranulePgModel();
  t.context.providerPgModel = new ProviderPgModel();
  t.context.PdrPgModel = new PdrPgModel();
  t.context.ExecutionPgModel = new ExecutionPgModel();

  const statuses = ['queued', 'failed', 'completed', 'running'];
  const errors = [{ Error: { keyword: 'UnknownError' } }, { Error: { keyword: 'CumulusMessageAdapterError' } }, { Error: { keyword: 'IngestFailure' } }, { Error: { keyword: 'CmrFailure' } }, { Error: {} }];
  const granules = [];
  const collections = [];
  const executions = [];
  const pdrs = [];
  const providers = [];

  range(20).map((num) => (
    // collections is never aggregate queried
    collections.push(fakeCollectionRecordFactory({
      name: `testCollection${num}`,
      cumulus_id: num,
    }))
  ));

  range(10).map((num) => (
    // providers is never aggregate queried
    providers.push(fakeProviderRecordFactory({
      cumulus_id: num,
      name: `testProvider${num}`,
    }))
  ));

  range(100).map((num) => (
    // granules can be queried by timestampto/from, collectionid, providerid, status,
    granules.push(fakeGranuleRecordFactory({
      collection_cumulus_id: num % 20,
      status: statuses[num % 4],
      created_at: (new Date(2018 + (num % 6), (num % 12), (num % 30))).toISOString(),
      updated_at: (new Date(2018 + (num % 6), (num % 12), ((num + 1) % 29))).toISOString(),
      error: errors[num % 5],
      duration: num + (num / 10),
      provider_cumulus_id: num % 10,
    }))
  ));

  range(20).map((num) => (
    // pdrs can be queried by timestampto/from, status
    pdrs.push(fakePdrRecordFactory({
      collection_cumulus_id: num,
      status: statuses[(num % 3) + 1],
      provider_cumulus_id: num % 10,
      created_at: (new Date(2018 + (num % 6), (num % 12), (num % 30))).toISOString(),
      updated_at: (new Date(2018 + (num % 6), (num % 12), ((num + 1) % 29))).toISOString(),
    // eslint-disable-next-line no-sequences
    })),
    // executions can be queried by: timestampto/from, collectionid, status
    executions.push(fakeExecutionRecordFactory({
      collection_cumulus_id: num,
      status: statuses[(num % 3) + 1],
      error: errors[num % 5],
      created_at: (new Date(2018 + (num % 6), (num % 12), (num % 30))).toISOString(),
      updated_at: (new Date(2018 + (num % 6), (num % 12), ((num + 1) % 29))).toISOString(),
    }))
  ));

  await t.context.collectionPgModel.insert(
    t.context.knex,
    collections
  );

  await t.context.providerPgModel.insert(
    t.context.knex,
    providers
  );

  await t.context.granulePgModel.insert(
    t.context.knex,
    granules
  );

  await t.context.ExecutionPgModel.insert(
    t.context.knex,
    executions
  );

  await t.context.PdrPgModel.insert(
    t.context.knex,
    pdrs
  );
});

test.after.always(async (t) => {
  await destroyLocalTestDb({
    ...t.context,
    testDbName,
  });
});

test('StatsSearch returns correct response for basic granules query', async (t) => {
  const { knex } = t.context;
  const queryStringParams = {
    type: 'granules',
  };
  const AggregateSearch = new StatsSearch(queryStringParams);

  const expectedResponse = {
    meta: { name: 'cumulus-api', count: 100, field: 'status' },
    count: [
      { key: 'completed', count: 25 },
      { key: 'running', count: 25 },
      { key: 'queued', count: 25 },
      { key: 'failed', count: 25 },
    ],
  };

  t.deepEqual(await AggregateSearch.aggregate(knex), expectedResponse);
});

test('StatsSearch filters correctly by date', async (t) => {
  const { knex } = t.context;
  const queryStringParams = {
    type: 'granules',
    timestamp__from: `${(new Date(2020, 1, 28)).getTime()}`,
    timestamp__to: `${(new Date(2022, 2, 30)).getTime()}`,
  };

  const AggregateSearch = new StatsSearch(queryStringParams);

  const expectedResponse = {
    meta: { name: 'cumulus-api', count: 34, field: 'status' },
    count: [
      { key: 'completed', count: 9 },
      { key: 'running', count: 9 },
      { key: 'failed', count: 8 },
      { key: 'queued', count: 8 },
    ],
  };

  t.deepEqual(await AggregateSearch.aggregate(knex), expectedResponse);
});

test('StatsSearch filters executions correctly', async (t) => {
  const { knex } = t.context;
  const queryStringParams1 = {
    type: 'executions',
    field: 'status',
  };

  const AggregateSearch = new StatsSearch(queryStringParams1);
  const expectedResponse = {
    meta: { name: 'cumulus-api', count: 20, field: 'status' },
    count: [
      { key: 'completed', count: 7 },
      { key: 'failed', count: 7 },
      { key: 'running', count: 6 },
    ],
  };

  const queryStringParams2 = {
    type: 'executions',
    field: 'status',
    timestamp__to: `${(new Date(2023, 11, 30)).getTime()}`,
    timestamp__from: `${(new Date(2021, 1, 28)).getTime()}`,
  };

  const AggregateSearch2 = new StatsSearch(queryStringParams2);
  const expectedResponse2 = {
    meta: { name: 'cumulus-api', count: 9, field: 'status' },
    count: [
      { key: 'completed', count: 3 },
      { key: 'failed', count: 3 },
      { key: 'running', count: 3 },
    ],
  };

  const queryStringParams3 = {
    type: 'executions',
    field: 'status',
    timestamp__from: `${(new Date(2023, 1, 28)).getTime()}`,
    timestamp__to: `${(new Date(2023, 11, 30)).getTime()}`,
  };

  const AggregateSearch3 = new StatsSearch(queryStringParams3);
  const expectedResponse3 = {
    meta: { name: 'cumulus-api', count: 3, field: 'status' },
    count: [{ key: 'running', count: 3 }],
  };

  const queryStringParams4 = {
    type: 'executions',
    field: 'status',
    timestamp__to: `${(new Date(2023, 11, 30)).getTime()}`,
    timestamp__from: `${(new Date(2021, 1, 28)).getTime()}`,
    collectionId: 'testCollection5',
    status: 'running',
  };

  const AggregateSearch4 = new StatsSearch(queryStringParams4);
  const expectedResponse4 = {
    meta: { name: 'cumulus-api', count: 1, field: 'status' },
    count: [{ key: 'undefined', count: 1 }],
  };
  t.deepEqual(await AggregateSearch.aggregate(knex), expectedResponse);
  t.deepEqual(await AggregateSearch2.aggregate(knex), expectedResponse2);
  t.deepEqual(await AggregateSearch3.aggregate(knex), expectedResponse3);
  t.deepEqual(await AggregateSearch4.aggregate(knex), expectedResponse4);
});

test('StatsSearch filters PDRs correctly', async (t) => {
  const { knex } = t.context;
  const queryStringParams1 = {
    type: 'pdrs',
    field: 'status',
  };

  const AggregateSearch = new StatsSearch(queryStringParams1);
  const expectedResponse = {
    meta: { name: 'cumulus-api', count: 20, field: 'status' },
    count: [
      { key: 'completed', count: 7 },
      { key: 'failed', count: 7 },
      { key: 'running', count: 6 },
    ],
  };

  const queryStringParams2 = {
    type: 'pdrs',
    field: 'status',
    timestamp__to: `${(new Date(2019, 12, 9)).getTime()}`,
    timestamp__from: `${(new Date(2018, 1, 28)).getTime()}`,
  };

  const AggregateSearch2 = new StatsSearch(queryStringParams2);
  const expectedResponse2 = {
    meta: { name: 'cumulus-api', count: 6, field: 'status' },
    count: [{ key: 'completed', count: 4 }, { key: 'failed', count: 2 }],
  };

  const queryStringParams3 = {
    type: 'pdrs',
    field: 'status',
    timestamp__to: `${(new Date(2019, 12, 9)).getTime()}`,
    timestamp__from: `${(new Date(2018, 1, 28)).getTime()}`,
    status: 'failed',
  };

  const AggregateSearch3 = new StatsSearch(queryStringParams3);
  const expectedResponse3 = {
    meta: { name: 'cumulus-api', count: 2, field: 'status' },
    count: [{ key: 'undefined', count: 2 }],
  };

  t.deepEqual(await AggregateSearch.aggregate(knex), expectedResponse);
  t.deepEqual(await AggregateSearch2.aggregate(knex), expectedResponse2);
  t.deepEqual(await AggregateSearch3.aggregate(knex), expectedResponse3);
});

test('StatsSearch returns correct response when queried by provider', async (t) => {
  const { knex } = t.context;
  const queryStringParams = {
    type: 'granules',
    field: 'status',
    providerId: 'testProvider2',
  };

  const expectedResponse = {
    meta: { name: 'cumulus-api', count: 100, field: 'status' },
    count: [
      { key: 'completed', count: 25 },
      { key: 'running', count: 25 },
      { key: 'queued', count: 25 },
      { key: 'failed', count: 25 },
    ],
  };

  const AggregateSearch = new StatsSearch(queryStringParams);
  t.deepEqual(await AggregateSearch.aggregate(knex), expectedResponse);
});

test('StatsSearch returns correct response when queried by collection', async (t) => {
  const { knex } = t.context;
  const queryStringParams = {
    type: 'granules',
    field: 'status',
    collectionId: 'testCollection8',
  };

  const expectedResponse = {
    meta: { name: 'cumulus-api', count: 5, field: 'status' },
    count: [{ key: 'queued', count: 5 }],
  };

  const AggregateSearch = new StatsSearch(queryStringParams);
  t.deepEqual(await AggregateSearch.aggregate(knex), expectedResponse);
});

test('StatsSearch returns correct response when queried by collection and provider', async (t) => {
  const { knex } = t.context;
  const queryStringParams = {
    type: 'granules',
    field: 'status',
    collectionId: 'testCollection1',
    providerId: 'testProvider1',
  };

  const expectedResponse = {
    meta: { name: 'cumulus-api', count: 5, field: 'status' },
    count: [{ key: 'failed', count: 5 }],
  };

  const AggregateSearch = new StatsSearch(queryStringParams);

  const queryStringParams2 = {
    type: 'granules',
    field: 'status',
    collectionId: 'testCollection1',
    providerId: 'testProvider1',
    timestamp__to: `${(new Date(2019, 12, 9)).getTime()}`,
    timestamp__from: `${(new Date(2018, 1, 28)).getTime()}`,
  };

  const expectedResponse2 = {
    meta: { name: 'cumulus-api', count: 2, field: 'status' },
    count: [{ key: 'failed', count: 2 }],
  };

  const AggregateSearch2 = new StatsSearch(queryStringParams2);
  const queryStringParams3 = {
    type: 'granules',
    field: 'status',
    collectionId: 'testCollection1',
    providerId: 'testProvider1',
    timestamp__to: `${(new Date(2019, 12, 9)).getTime()}`,
    timestamp__from: `${(new Date(2018, 1, 28)).getTime()}`,
    status: 'failed',
  };

  const expectedResponse3 = {
    meta: { name: 'cumulus-api', count: 2, field: 'status' },
    count: [{ key: 'undefined', count: 2 }],
  };

  const AggregateSearch3 = new StatsSearch(queryStringParams3);
  t.deepEqual(await AggregateSearch.aggregate(knex), expectedResponse);
  t.deepEqual(await AggregateSearch2.aggregate(knex), expectedResponse2);
  t.deepEqual(await AggregateSearch3.aggregate(knex), expectedResponse3);
});

test('StatsSearch returns correct response when queried by error', async (t) => {
  const { knex } = t.context;
  const queryStringParams = {
    type: 'granules',
    field: 'error.Error.keyword',
  };

  const AggregateSearch = new StatsSearch(queryStringParams);
  const expectedResponse = {
    meta: { name: 'cumulus-api', count: 100, field: 'error.Error.keyword' },
    count: [
      { key: 'null', count: 20 },
      { key: 'CumulusMessageAdapterError', count: 20 },
      { key: 'CmrFailure', count: 20 },
      { key: 'UnknownError', count: 20 },
      { key: 'IngestFailure', count: 20 },
    ],
  };

  t.deepEqual(await AggregateSearch.aggregate(knex), expectedResponse);
  const queryStringParams2 = {
    type: 'granules',
    field: 'error.Error.keyword',
    timestamp__to: `${(new Date(2021, 12, 9)).getTime()}`,
    timestamp__from: `${(new Date(2020, 1, 28)).getTime()}`,
  };

  const AggregateSearch2 = new StatsSearch(queryStringParams2);
  const expectedResponse2 = {
    meta: { name: 'cumulus-api', count: 34, field: 'error.Error.keyword' },
    count: [
      { key: 'CmrFailure', count: 8 },
      { key: 'IngestFailure', count: 7 },
      { key: 'null', count: 7 },
      { key: 'CumulusMessageAdapterError', count: 6 },
      { key: 'UnknownError', count: 6 },
    ],
  };
  t.deepEqual(await AggregateSearch2.aggregate(knex), expectedResponse2);
});

test('StatsSummary works', async (t) => {
  const { knex } = t.context;
  const StatsSummary = new StatsSearch({});
  const results = await StatsSummary.summary(knex);

  const queryStringParams2 = {
    timestamp__to: `${(new Date(2019, 12, 9)).getTime()}`,
    timestamp__from: `${(new Date(2018, 1, 28)).getTime()}`,
  };

  const StatsSummary2 = new StatsSearch(queryStringParams2);
  const results2 = await StatsSummary2.summary(knex);

  t.is(results.errors.value, '80');
  t.is(results.processingTime.value, 54.44999999642372);
  t.is(results.granules.value, '100');
  t.is(results2.errors.value, '21');
  t.is(results2.granules.value, '25');
  t.is(results2.processingTime.value, 53.54799992084503);
});

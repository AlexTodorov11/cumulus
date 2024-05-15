const test = require('ava');
const { putFile, createBucket, deleteS3Buckets } = require('@cumulus/aws-client/S3');
const clone = require('lodash/clone');
const {
  organizeByErrorType,
  organizeByDate,
  getErrorLogs,
} = require('../dist/main');

// test('organizeByErrorType gets the expected results', (t) => {
//   let keys = [
//     'a/2023.04.12T12.16.10/something.log',
//     'a/2023.04.12T12.14.10/something.log',
//     'a/2053.04.12T12.16.10/somethingElse.log',
//   ];
//   let organized = organizeByErrorType(keys);
//   t.deepEqual(
//     organized,
//     {
//       something: [
//         'a/2023.04.12T12.14.10/something.log',
//         'a/2023.04.12T12.16.10/something.log',
//       ],
//       somethingElse: [
//         'a/2053.04.12T12.16.10/somethingElse.log',
//       ],
//     }
//   );
//   keys = [
//     'something.log',
//     'a/something',
//     'a/2053.04.12T12.16.10/somethingElse.log',
//   ];
//   organized = organizeByErrorType(keys);
//   t.deepEqual(
//     organized,
//     {
//       something: [
//         'a/something',
//         'something.log',
//       ],
//       somethingElse: [
//         'a/2053.04.12T12.16.10/somethingElse.log',
//       ],
//     }
//   );
// });

// test('organizeByDate gets the expected results', (t) => {
//   let keys = [
//     'a/2023.04.12T12.16.10/something.log',
//     'a/2023.04.12T12.14.10/something.log',
//     'a/2053.04.12T12.16.10/somethingElse.log',
//   ];
//   let organized = organizeByDate(keys);
//   t.deepEqual(
//     organized,
//     [
//       ['2023.04.12T12.14.10', 'something'],
//       ['2023.04.12T12.16.10', 'something'],
//       ['2053.04.12T12.16.10', 'somethingElse'],
//     ]
//   );
//   keys = [
//     'a/b/something.log',
//     'a/2023.04.12T12.14.10/something.log',
//     'a/2053.04.12T12.16.10/somethingElse.log',
//   ];
//   organized = organizeByDate(keys);
//   console.log(organized);
//   t.deepEqual(
//     organized,
//     [
//       ['2023.04.12T12.14.10', 'something'],
//       ['2053.04.12T12.16.10', 'somethingElse'],
//       ['b', 'something'],
//     ]
//   );
// });

test('getKeys pulls a complete set of valid s3 keys', async (t) => {
  await createBucket('unit-test-error-logs');
  await putFile('unit-test-error-logs', 'a/2023.04.12T12.14.10/something.log', './tests/testFiles/testFile.log');
  await putFile('unit-test-error-logs', 'a/2023.04.14T12.16.10/something.log', './tests/testFiles/testFile.log');
  const keys = await getErrorLogs('a', new Date('2023-04-12'), 'unit-test-error-logs');
  console.log(keys)
  t.deepEqual(
    keys,
    [
      'a/2023.04.12T12.14.10/something.log',
      'a/2023.04.14T12.16.10/something.log',
    ]
  );
  await deleteS3Buckets(['unit-test-error-logs']);
});

// test('processArgs parses a complee set of prefix, date, bucket args', async (t) => {
//   const oldArgv = clone(process.argv);
//   process.argv.push('a')
//   console.log(oldArgv);
//   console.log(process.argv);
//   t.true(true);
// });

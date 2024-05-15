
//@ts-check

import minimist from 'minimist';
import moment from 'moment';
import { listS3ObjectsV2Batch } from "@cumulus/aws-client/S3";

interface UnitErrorArgs {
  prefix: string
  date: string
  bucket: string
}
const momentFormat = 'YYYY.mm.DDTHH.mm.ss';

export const extractDate = (key: string): string => {
  const keySegments = key.split('/');
  keySegments.pop();
  const date = keySegments.pop();
  console.log(date);
  return moment(date).format(momentFormat);
}
const compare = (a: string, b: string) => {
  console.log(a, b);
  return a > b
}

export const getErrorLogs = async (
  branch: string = 'master',
  date: string,
  bucket: string = 'unit-test-error-logs'
): Promise<Array<any>> => {
  const objects: Array<any> = [];
  for await (
    const objectBatch of listS3ObjectsV2Batch({ Bucket: bucket, Prefix: branch })
  ) {
    console.log(objectBatch);
    if (objectBatch){
      objectBatch.filter(
        (object) => object.Key && object.Key.endsWith('.log') && compare(extractDate(object.Key),date)
      ).forEach((object) => objects.push(object.Key));
    }
  }
  return objects;
}
export const organizeByErrorType = (keys: Array<string>): {[key:string]: Array<string>} => {
  const mapping: {[key:string]: Array<string>} = {}
  keys.forEach((key) => {
    const segments = key.split('/')
    if(!segments) return;
    const errorPoint = segments.pop()?.split('.')[0];
    if(!errorPoint) return;
    if(!(errorPoint in mapping)) {
      mapping[errorPoint] = [];
    }
    mapping[errorPoint].push(key);
  })
  Object.values(mapping).forEach((list) => list.sort());
  return mapping;
}
export const organizeByDate = (keys: Array<string>): Array<Array<string>> => {
  const sortedList: Array<Array<string>> = [];
  keys.forEach((key) => {
    const segments = key.split('/')
    if(!segments) return;
    const errorPoint = segments.pop()?.split('.')[0];
    if(!errorPoint) return;
    const errorDate = segments.pop();
    if(!errorDate) return;
    sortedList.push(
      [errorDate, errorPoint]
    );
  })
  sortedList.sort((a, b)=> a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0);
  return sortedList;
}

export const processArgs = async (): Promise<UnitErrorArgs> => {
  const {
    prefix,
    date,
    bucket,
  } = minimist(
    process.argv,
    {
      string: ['prefix', 'date', 'bucket'],
      alias: {
        p: 'prefix',
        key: 'prefix',
        k: 'prefix',
        path: 'prefix',
        b: 'prefix',
        branch: 'prefix',
        d: 'date'
      },
      default: {
        prefix: 'master',
        date: undefined,
        bucket: 'unit-test-error-logs'
      },
    }
  );
  return {
    prefix,
    date: moment(date).format(momentFormat),
    bucket,
  };
};
const main = async () => {
  const {
    prefix,
    date,
    bucket
  } = await processArgs();

  const keys = await getErrorLogs(prefix, date, bucket);
  console.log(organizeByDate(keys));
  console.log(organizeByErrorType(keys));

};

if (require.main === module) {
  main(
  ).then(
    (ret) => ret
  ).catch((error) => {
    console.log(`failed: ${error}`);
    throw error;
  });
};

/**
 * This module includes tools for validating PDRs
 * and generating PDRD and PAN messages
 */

'use strict';

const fs = require('fs-extra');
const isNumber = require('lodash.isnumber');
const isString = require('lodash.isstring');
const pvl = require('@cumulus/pvl/t');
const { PDRParsingError } = require('@cumulus/common/errors');

// If updating this mapping, please update the related documentation
// at docs/workflow_tasks/parse_pdr.md
const pdrToCnmMap = {
  HDF: 'data',
  'HDF-EOS': 'data',
  SCIENCE: 'data',
  BROWSE: 'browse',
  METADATA: 'metadata',
  BROWSE_METADATA: 'metadata',
  QA_METADATA: 'metadata',
  PRODHIST: 'qa',
  QA: 'metadata',
  TGZ: 'data',
  LINKAGE: 'data'
};

function getItem(spec, pdrName, name, must = true) {
  const item = spec.get(name);
  if (item) {
    return item.value;
  }

  if (must) {
    throw new PDRParsingError(name, pdrName);
  }

  return null;
}

/**
 * Makes sure that a FILE Spec has all the required files and returns
 * the content as an object. Throws error if anything is missing
 * For more info refer to https://github.com/nasa/cumulus-api/issues/104#issuecomment-285744333
 *
 * @param {string} pdrName - the name of the PDR, used when throwing a PDRParsingError
 * @param {Object} spec - PDR spec object generated by PVL
 * @returns {Object} throws error if failed
 */
function parseSpec(pdrName, spec) {
  const get = getItem.bind(null, spec, pdrName);

  // check each file_spec has DIRECTORY_ID, FILE_ID, FILE_SIZE
  const path = get('DIRECTORY_ID');
  const filename = get('FILE_ID');
  const fileSize = get('FILE_SIZE');
  const fileType = get('FILE_TYPE');

  const checksumType = get('FILE_CKSUM_TYPE', false);
  const checksumValue = get('FILE_CKSUM_VALUE', false);

  // Validate fileType is in the mapping
  if (fileType) {
    if (!Object.keys(pdrToCnmMap).includes(fileType)) {
      throw new PDRParsingError(`INVALID FILE_TYPE PARAMETER : ${fileType}`);
    }
  }

  if (checksumType || checksumValue) {
    // Make sure that both checksumType and checksumValue are set
    if (!checksumType) throw new PDRParsingError('MISSING FILE_CKSUM_TYPE PARAMETER');
    if (!checksumValue) throw new PDRParsingError('MISSING FILE_CKSUM_VALUE PARAMETER');

    // Make sure that the checksumType is valid
    if (!['CKSUM', 'MD5'].includes(checksumType)) {
      throw new PDRParsingError(`UNSUPPORTED CHECKSUM TYPE: ${checksumType}`);
    }

    // Make sure that the checksumValue is valid
    if ((checksumType === 'CKSUM') && (!isNumber(checksumValue))) {
      throw new PDRParsingError(`Expected CKSUM value to be a number: ${checksumValue}`);
    }
    if ((checksumType === 'MD5') && (!isString(checksumValue))) {
      throw new PDRParsingError(`Expected MD5 value to be a string: ${checksumValue}`);
    }
  }

  const parsedSpec = {
    path,
    fileSize,
    name: filename,
    fileType: pdrToCnmMap[fileType]
  };
  if (checksumType) parsedSpec.checksumType = checksumType;
  if (checksumValue) parsedSpec.checksumValue = checksumValue;
  return parsedSpec;
}
module.exports.parseSpec = parseSpec;

/**
 * Extract a granuleId from a filename
 *
 * @param {string} fileName - The filename to extract the granuleId from
 * @param {RegExp|string} regex - A regular expression describing how to extract
 *   a granuleId from a filename
 * @returns {string} the granuleId or the name of the file if no granuleId was
 *   found
 */
function extractGranuleId(fileName, regex) {
  const test = new RegExp(regex);
  const match = fileName.match(test);

  if (match) {
    return match[1];
  }
  return fileName;
}

/**
 * Load a PDR file from disk and parse the PVL document
 *
 * @param {string} pdrFilePath - the file to be loaded
 * @returns {Object} a parsed PVL document
 */
async function loadPdrFile(pdrFilePath) {
  const pdrFile = await fs.readFile(pdrFilePath, 'utf8');

  // Investigating CUMULUS-423
  if (pdrFile.trim().length === 0) throw new Error(`PDR file had no contents: ${pdrFilePath}`);

  // because MODAPS PDRs do not follow the standard ODL spec
  // we have to make sure there are spaces before and after every
  // question mark
  let pdrString = pdrFile.replace(/((\w*)=(\w*))/g, '$2 = $3');

  // temporary fix for PVL not recognizing quoted strings as symbols
  pdrString = pdrString.replace(/"/g, '');

  let parsed;
  try {
    parsed = pvl.pvlToJS(pdrString);
  } catch (e) {
    throw new PDRParsingError(e.message);
  }

  return parsed;
}

// FIXME Figure out what this function does and document it
async function granuleFromFileGroup(fileGroup, pdrName, collectionConfigStore) {
  if (!fileGroup.get('DATA_TYPE')) throw new PDRParsingError('DATA_TYPE is missing');
  const dataType = fileGroup.get('DATA_TYPE').value;

  if (!fileGroup.get('DATA_VERSION')) {
    throw new PDRParsingError('DATA_VERSION is missing');
  }

  const version = `${fileGroup.get('DATA_VERSION').value}`;

  // get all the file specs in each group
  const specs = fileGroup.objects('FILE_SPEC');
  if (specs.length === 0) throw new Error('No FILE_SPEC sections found.');

  const files = specs.map(parseSpec.bind(null, pdrName));

  const collectionConfig = await collectionConfigStore.get(dataType, version);

  return {
    dataType,
    version,
    files,
    granuleId: extractGranuleId(files[0].name, collectionConfig.granuleIdExtraction),
    granuleSize: files.reduce((total, file) => total + file.fileSize, 0)
  };
}

/**
 * Parse a PDR file
 *
 * @param {string} pdrFilePath - the file to be parsed
 * @param {Object} collectionConfigStore - a CollectionConfigStore object used
 *   for fetching collection configurations
 * @param {string} pdrName - the name of the PDR
 * @returns {Promise<Object>} an object representing the PDR
 */
exports.parsePdr = async function parsePdr(pdrFilePath, collectionConfigStore, pdrName) {
  let pdrDocument = await loadPdrFile(pdrFilePath);

  // check if the PDR has groups
  // if so, get the objects inside the first group
  // FIXME handle cases where there are more than one group
  const groups = pdrDocument.groups();
  if (groups.length > 0) pdrDocument = groups[0];

  // Get all the file groups
  const fileGroups = pdrDocument.objects('FILE_GROUP');

  const promisedGranules = fileGroups.map((fileGroup) =>
    granuleFromFileGroup(fileGroup, pdrName, collectionConfigStore));
  const granules = await Promise.all(promisedGranules);

  // check file count
  const filesCount = granules.reduce((total, granule) => total + granule.files.length, 0);
  const expectedFileCount = pdrDocument.get('TOTAL_FILE_COUNT').value;
  if (filesCount !== expectedFileCount) {
    throw new PDRParsingError("FILE COUNT doesn't match expected file count");
  }

  return {
    filesCount,
    granules,
    granulesCount: granules.length,
    totalSize: granules.reduce((total, granule) => total + granule.granuleSize, 0)
  };
};

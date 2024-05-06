/**
 * Asynchronously imports the 'got' module.
 *
 * This function uses dynamic imports to import the ESM-only 'got' module at runtime.
 * This should be used for importing the non-compat module in to CommonJS TS/webpacked
 * modules.
 *
 * The method currently memoizes the import as under certain load conditions
 * this import results in a segfault.   See https://github.com/nodejs/node/issues/35889 and the entire
 * tree of related isseus for more detials.
 *
 * @returns {Promise<Function>} A promise that resolves to the 'got' function.
 * @throws {Error} If an error occurs while importing the module.
 */
const importGot = async () => {
  const { default: got } = await import('got');
  return got;
};

module.exports = { importGot };

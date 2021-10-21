/** @type {import("@jest/types").Config.InitialOptions} */
const config = {
  preset: 'ts-jest',
  setupFilesAfterEnv: [],
  testEnvironment: 'node',
  testRegex: '\\.test\\.tsx?$',
};

module.exports = config;

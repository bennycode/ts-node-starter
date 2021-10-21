// @ts-ignore
const baseConfig = require('./jest.config');

/** @type {import("@jest/types").Config.InitialOptions} */
const coverageConfig = {
  ...baseConfig,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/index.ts', '!**/start.ts'],
  coverageReporters: ['html', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

module.exports = coverageConfig;

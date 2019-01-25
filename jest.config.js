/* @flow */
module.exports = {
  coverageDirectory: 'reports/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/packages/mineral-ui-icons',
    '/website/'
  ],
  moduleNameMapper: {
    '.(md|svg)$': '<rootDir>/utils/emptyString.js'
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  setupFiles: ['raf/polyfill'],
  setupFilesAfterEnv: ['<rootDir>/utils/setupTestFramework.js'],
  snapshotSerializers: [
    'jest-emotion',
    'enzyme-to-json/serializer',
    '<rootDir>/utils/snapshotSerializer'
  ],
  testURL: 'http://localhost/'
};

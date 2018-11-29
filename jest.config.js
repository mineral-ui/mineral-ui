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
  setupTestFrameworkScriptFile: '<rootDir>/utils/setupTestFrameworkScript.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
    '<rootDir>/utils/snapshotSerializer'
  ],
  testURL: 'http://localhost/'
};

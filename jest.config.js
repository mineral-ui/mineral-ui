/* @flow */
module.exports = {
  coverageDirectory: 'reports/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/packages/mineral-ui-icons',
    '/website/'
  ],
  moduleNameMapper: {
    '.*react-docgen-loader.*': '<rootDir>/utils/emptyObject.js',
    '.(md|svg)$': '<rootDir>/utils/emptyString.js'
  },
  setupFiles: ['raf/polyfill'],
  setupTestFrameworkScriptFile: '<rootDir>/utils/setupTestFrameworkScript.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
    'jest-glamor-react',
    '<rootDir>/utils/snapshotSerializer'
  ]
};

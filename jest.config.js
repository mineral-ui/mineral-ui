/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
module.exports = {
  coverageDirectory: 'reports/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/Icon/Icon.+.js',
    '/website/'
  ],
  moduleNameMapper: {
    '.*react-docgen-loader.*': '<rootDir>/utils/emptyObject.js',
    '.md$': '<rootDir>/utils/emptyObject.js'
  },
  setupFiles: ['raf/polyfill'],
  setupTestFrameworkScriptFile: '<rootDir>/utils/setupTestFrameworkScript.js',
  snapshotSerializers: ['enzyme-to-json/serializer']
};

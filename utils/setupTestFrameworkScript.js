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

import React from 'react';
import Enzyme from 'enzyme';
import { simulations } from 'glamor';
import semver from 'semver';

// Configure Enzyme for appropriate React version
let Adapter;
if (semver.satisfies(React.version, '15.0.0 - 15.4.x')) {
  Adapter = require('enzyme-adapter-react-15.4');
} else if (semver.satisfies(React.version, '^15.5.0')) {
  Adapter = require('enzyme-adapter-react-15');
} else if (semver.satisfies(React.version, '^16.0.0')) {
  Adapter = require('enzyme-adapter-react-16');
}
Enzyme.configure({ adapter: new Adapter() });

// Enable Glamor simulate helper
simulations(true);

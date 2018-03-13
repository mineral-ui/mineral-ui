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

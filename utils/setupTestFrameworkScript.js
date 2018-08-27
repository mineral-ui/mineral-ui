import React from 'react';
import Enzyme from 'enzyme';
import * as emotion from 'emotion';
import { createMatchers, createSerializer } from 'jest-emotion';
import semver from 'semver';

expect.addSnapshotSerializer(createSerializer(emotion));
expect.extend(createMatchers(emotion));

// Configure Enzyme for appropriate React version
let Adapter;
if (semver.satisfies(React.version, '15.0.0 - 15.4.x')) {
  Adapter = require('enzyme-adapter-react-15.4');
} else if (semver.satisfies(React.version, '^15.5.0')) {
  Adapter = require('enzyme-adapter-react-15');
} else if (semver.satisfies(React.version, '^16.0.0')) {
  Adapter = require('enzyme-react-adapter-future');
}
Enzyme.configure({ adapter: new Adapter() });

window.scroll = jest.fn();

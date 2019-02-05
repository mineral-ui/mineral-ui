/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { TabPanel } from '../index';

function shallowTabPanel() {
  return shallow(<TabPanel />);
}

describe('TabPanel', () => {
  it('renders', () => {
    const tabs = shallowTabPanel();

    expect(tabs.exists()).toEqual(true);
  });
});

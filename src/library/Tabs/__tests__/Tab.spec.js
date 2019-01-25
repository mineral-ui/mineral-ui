/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { Tab } from '../index';

function shallowTab(props = {}) {
  const tabProps = {
    id: 'test',
    index: 0,
    title: 'Test',
    panelId: 'panel',
    selected: false,
    ...props
  };
  return shallow(<Tab {...tabProps} />);
}

describe('Tab', () => {
  it('renders', () => {
    const tabs = shallowTab();

    expect(tabs.exists()).toEqual(true);
  });
});

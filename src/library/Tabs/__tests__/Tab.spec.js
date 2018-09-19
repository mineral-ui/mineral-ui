/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Tab, { componentTheme } from '../Tab';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

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

  describe('theme overrides', () => {
    const tabProps = {
      id: 'test',
      index: 0,
      title: 'Test',
      panelId: 'panel',
      selected: true
    };
    testThemeOverrides(
      <Tab {...tabProps}>test</Tab>,
      getProcessedComponentThemeKeys(componentTheme, {
        excludeKeys: ['Tab_color']
      })
    );
  });
});

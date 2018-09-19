/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import TabPanel, { componentTheme } from '../TabPanel';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowTabPanel() {
  return shallow(<TabPanel />);
}

describe('TabPanel', () => {
  it('renders', () => {
    const tabs = shallowTabPanel();

    expect(tabs.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <TabPanel />,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });
});

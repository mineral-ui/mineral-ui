/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import {
  Tab,
  TabList,
  TabPanel,
  tabListTheme,
  tabPanelTheme,
  tabTheme
} from '../index';

describe('Tabs', () => {
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
      getProcessedComponentThemeKeys(tabTheme, {
        excludeKeys: ['Tab_color']
      })
    );
  });
});

describe('TabList', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <TabList />,
      getProcessedComponentThemeKeys(tabListTheme, {
        excludeKeys: [
          'TabList_gutterVertical',
          'TabListArrow_color',
          'TabListArrow_color_hover',
          'TabListOverflowContainer_boxShadowColor'
        ]
      })
    );
  });
});

describe('TabPanel', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <TabPanel />,
      getProcessedComponentThemeKeys(tabPanelTheme)
    );
  });
});

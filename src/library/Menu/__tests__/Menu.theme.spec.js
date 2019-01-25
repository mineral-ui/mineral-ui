/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import {
  MenuDivider,
  MenuGroup,
  MenuItem,
  menuDividerTheme,
  menuGroupTheme,
  menuItemTheme
} from '../index';

describe('MenuDivider', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <MenuDivider />,
      getProcessedComponentThemeKeys(menuDividerTheme)
    );
  });
});

describe('MenuGroup', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <MenuGroup title="test" />,
      getProcessedComponentThemeKeys(menuGroupTheme)
    );
  });
});

describe('MenuItem', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <MenuItem secondaryText="test">test</MenuItem>,
      getProcessedComponentThemeKeys(menuItemTheme, {
        excludeKeys: ['MenuItem_backgroundColor_selectedHover']
      })
    );
  });
});

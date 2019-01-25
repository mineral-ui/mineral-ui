/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import { mineralTheme } from '../../themes';
import OverflowContainer, {
  OverflowContainerWithShadows,
  overflowContainerTheme,
  overflowContainerWithShadowsTheme
} from '../index';

describe('OverflowContainer', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <OverflowContainer />,
      getProcessedComponentThemeKeys(overflowContainerTheme(mineralTheme))
    );
  });
});

describe('OverflowContainerWithShadows', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <OverflowContainerWithShadows scrollX />,
      getProcessedComponentThemeKeys(
        overflowContainerWithShadowsTheme(mineralTheme),
        {
          excludeKeys: [
            'OverflowContainerWithShadows_boxShadowBottom',
            'OverflowContainerWithShadows_boxShadowLeft',
            'OverflowContainerWithShadows_boxShadowRight',
            'OverflowContainerWithShadows_boxShadowTop'
          ]
        }
      )
    );
  });
});

/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import Tooltip, { tooltipTheme } from '../index';

describe('Tooltip', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <Tooltip id="test" content="content" isOpen>
        trigger
      </Tooltip>,
      getProcessedComponentThemeKeys(tooltipTheme)
    );
  });
});

/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import Popover, { popoverTheme } from '../index';

describe('Popover', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <Popover content={<div>content</div>}>
        <button>trigger</button>
      </Popover>,
      getProcessedComponentThemeKeys(popoverTheme)
    );
  });
});

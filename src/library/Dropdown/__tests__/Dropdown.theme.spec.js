/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import Dropdown, { dropdownTheme } from '../index';

import type { MenuItems } from '../../Menu/types';

const data: MenuItems = [
  { text: 'item 1' },
  { divider: true },
  { text: 'item 2' }
];

describe('Dropdown', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <Dropdown data={data} id="test" isOpen>
        <button>trigger</button>
      </Dropdown>,
      getProcessedComponentThemeKeys(dropdownTheme)
    );
  });
});

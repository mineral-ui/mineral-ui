/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import Select, { selectTheme } from '../index';

import type { MenuItems } from '../../Menu/types';

const data: MenuItems = [
  {
    text: 'A item',
    value: 'A'
  },
  {
    text: 'B item',
    value: 'B'
  },
  {
    text: 'C item',
    value: 'C'
  }
];

describe('Select', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <Select data={data} id="test" isOpen>
        <button>trigger</button>
      </Select>,
      getProcessedComponentThemeKeys(selectTheme, {
        excludeKeys: [
          'Select_color',
          'Select_color_readOnly',
          'Select_fontSize_small',
          'Select_paddingHorizontal_small',
          'Select_height_small',
          'Select_height_medium',
          'Select_height_jumbo'
        ]
      })
    );
  });
});

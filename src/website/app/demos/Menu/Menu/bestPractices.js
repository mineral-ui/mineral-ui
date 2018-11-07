/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../../../../../library/styles';
import { mineralTheme } from '../../../../../library/themes';
import Menu, { MenuItem } from '../../../../../library/Menu';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const DemoLayout = createStyledComponent('div', {
  '& > div': {
    backgroundColor: 'white',
    width: pxToEm(224)
  }
});

const backgroundColor = mineralTheme.color_gray_10;

const bestPractices: BestPractices = [
  {
    type: 'dont',
    backgroundColor,
    description:
      "Don't use a Menu as a general list. Items in a Menu should be actionable.",
    example: (
      <DemoLayout>
        <Menu>
          <MenuItem>Broccoli</MenuItem>
          <MenuItem>Cherry tomatoes</MenuItem>
          <MenuItem>Lemon</MenuItem>
          <MenuItem>Linguine</MenuItem>
          <MenuItem>Garlic</MenuItem>
          <MenuItem>Red pepper flakes</MenuItem>
          <MenuItem>Salmon</MenuItem>
        </Menu>
      </DemoLayout>
    )
  }
];

export default bestPractices;

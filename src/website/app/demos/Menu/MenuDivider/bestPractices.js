/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../../../../../library/styles';
import { mineralTheme } from '../../../../../library/themes';
import Menu, { MenuDivider, MenuItem } from '../../../../../library/Menu';

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
    type: 'do',
    backgroundColor,
    description: `Divide menu options to establish hierarchy.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuItem>Adam</MenuItem>
          <MenuItem>Alex</MenuItem>
          <MenuDivider />
          <MenuItem>Betsy</MenuItem>
          <MenuItem>Brian</MenuItem>
          <MenuItem>Bryson</MenuItem>
          <MenuDivider />
          <MenuItem>Carly</MenuItem>
          <MenuItem>Charles</MenuItem>
        </Menu>
      </DemoLayout>
    )
  },
  {
    type: 'do',
    backgroundColor,
    description: `Separate options that are related but should be set apart to
increase usability.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuItem>Create</MenuItem>
          <MenuItem>Read</MenuItem>
          <MenuItem>Update</MenuItem>
          <MenuDivider />
          <MenuItem variant="warning">Delete</MenuItem>
        </Menu>
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    backgroundColor,
    description: `Don't use MenuDividers for decoration, if there is no need
to create further grouping.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuItem>Helium</MenuItem>
          <MenuDivider />
          <MenuItem>Neon</MenuItem>
          <MenuDivider />
          <MenuItem>Argon</MenuItem>
          <MenuDivider />
          <MenuItem>Krypton</MenuItem>
          <MenuDivider />
          <MenuItem>Xenon</MenuItem>
          <MenuDivider />
          <MenuItem>Radon</MenuItem>
          <MenuDivider />
          <MenuItem>Oganesson</MenuItem>
        </Menu>
      </DemoLayout>
    )
  }
];

export default bestPractices;

/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../../../../../library/styles';
import { mineralTheme } from '../../../../../library/themes';
import Menu, {
  MenuDivider,
  MenuGroup,
  MenuItem
} from '../../../../../library/Menu';

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
    description: `Create groups if there are more than one set of actions in a
Menu. Users will be able to quickly scan their available options if there aren't
too many actions at the same level of hierarchy.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuGroup>
            <MenuItem>Undo</MenuItem>
            <MenuItem>Redo</MenuItem>
          </MenuGroup>
          <MenuGroup>
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
          </MenuGroup>
        </Menu>
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    backgroundColor,
    description: `Don't repeat the obvious in the group title. If there are
only a couple of groups with a handful of elements, trust that the user will
figure out the grouping from context.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuGroup title="History Navigation">
            <MenuItem>Undo</MenuItem>
            <MenuItem>Redo</MenuItem>
          </MenuGroup>
          <MenuGroup title="Text Actions">
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
          </MenuGroup>
        </Menu>
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    backgroundColor,
    description: `Don't place too many items in a group, which will be
overwhelming to users and your feature will get buried.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuGroup>
            <MenuItem>Decrease font size</MenuItem>
            <MenuItem>Increase font size</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem>Toggle command palette</MenuItem>
            <MenuItem>Toggle console</MenuItem>
            <MenuItem>Toggle context view</MenuItem>
            <MenuItem>Toggle debugger</MenuItem>
            <MenuItem>Toggle diagnostics</MenuItem>
            <MenuItem>Toggle distraction free mode</MenuItem>
            <MenuItem>Toggle file tree</MenuItem>
            <MenuItem>Toggle git tab</MenuItem>
            <MenuItem>Toggle GitHub tab</MenuItem>
            <MenuItem>Toggle health</MenuItem>
            <MenuItem>Toggle outline view</MenuItem>
            <MenuItem>Toggle quick open</MenuItem>
            <MenuItem>Toggle React inspector</MenuItem>
            <MenuItem>Toggle soft wrap</MenuItem>
            <MenuItem>Toggle task runner</MenuItem>
            <MenuItem>Toggle test runner</MenuItem>
          </MenuGroup>
        </Menu>
      </DemoLayout>
    )
  }
];

export default bestPractices;

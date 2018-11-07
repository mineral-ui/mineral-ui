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
    description: `Use the [appropriate variant](/color#guidelines-variants)
to give your users hints about what the potential outcome of an action will be.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuItem>Start instance</MenuItem>
          <MenuItem>Generate snapshot</MenuItem>
          <MenuItem variant="warning">Reboot instance</MenuItem>
          <MenuItem variant="danger">Terminate instance</MenuItem>
        </Menu>
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    backgroundColor,
    description:
      "Don't use a variant that differs from intent, as this will cause confusion.",
    example: (
      <DemoLayout>
        <Menu>
          <MenuItem>Clone table</MenuItem>
          <MenuItem variant="danger">Create new table</MenuItem>
        </Menu>
      </DemoLayout>
    )
  },
  {
    type: 'do',
    backgroundColor,
    description: `Clearly label [MenuItem](/components/menu-item) actions to be
predictable for frictionless interaction. Labels should be structured:
\`<verb> <noun>\`.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuItem secondaryText="⌘L">Select line</MenuItem>
          <MenuItem secondaryText="⌃⇧W">Select word</MenuItem>
          <MenuItem secondaryText="⌘J">Join lines</MenuItem>
        </Menu>
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    backgroundColor,
    description: `Don't use vague labels. Users should know exactly what will
happen when they click a Button.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuItem>Go</MenuItem>
          <MenuItem>Various config options</MenuItem>
          <MenuItem>Do it</MenuItem>
        </Menu>
      </DemoLayout>
    )
  },
  {
    type: 'do',
    backgroundColor,
    description: `Use the \`secondaryText\` attribute to give hints about
extra functionality or provide status context.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuItem secondaryText="⌘X">Cut</MenuItem>
          <MenuItem secondaryText="⌘C">Copy</MenuItem>
          <MenuItem secondaryText="⌘V">Paste</MenuItem>
        </Menu>
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    backgroundColor,
    description: `Don't display non-action labels in a MenuItem. All MenuItems
in a Menu should be actionable. If an option only exists to provide information,
it probably belongs somewhere else.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuItem variant="success">Daily revenue - $6543</MenuItem>
          <MenuItem>Initiate full refund</MenuItem>
          <MenuItem>Initiate partial refund</MenuItem>
          <MenuItem>Email customer</MenuItem>
        </Menu>
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    backgroundColor,
    description: `Don't use disabled MenuItems as section titles. Instead, use
the \`title\` prop of a [MenuGroup](/components/menu-group) to show meta information for
a group, or place this information elsewhere in the interface.`,
    example: (
      <DemoLayout>
        <Menu>
          <MenuItem disabled>Instance Id: 12345</MenuItem>
          <MenuDivider />
          <MenuItem>Start instance</MenuItem>
          <MenuItem>Generate snapshot</MenuItem>
          <MenuItem variant="warning">Reboot instance</MenuItem>
          <MenuItem variant="danger">Terminate instance</MenuItem>
        </Menu>
      </DemoLayout>
    )
  }
];

export default bestPractices;

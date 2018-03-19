/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../../../../library/styles';
import { mineralTheme } from '../../../../library/themes';
import Menu, {
  MenuDivider,
  MenuGroup,
  MenuItem
} from '../../../../library/Menu';

const DemoLayout = createStyledComponent('div', {
  '& > div': {
    backgroundColor: 'white',
    width: pxToEm(224)
  }
});

const backgroundColor = mineralTheme.color_gray_10;

export default {
  menu: [
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
  ],
  menuDivider: [
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
  ],
  menuGroup: [
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
  ],
  menuItem: [
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
  ]
};

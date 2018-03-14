/* @flow */
import { mineralTheme } from '../../../../../../themes';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Menu, { MenuDivider, MenuGroup, MenuItem } from '../../../../../../Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'basic',
  title: 'Basic Usage',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `Menus are composed of [MenuDivider](../menu-divider), [MenuGroup](../menu-group), and [MenuItem](../menu-item).
Menus display a list of actions or navigation options.

<Callout title="Note">
  Menus normally occupy the full available width of their container.
  The Menus here are width-constrained for illustration purposes.
</Callout>`,
  scope: { DemoLayout, IconCloud, Menu, MenuDivider, MenuGroup, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem onClick={event => { console.log(event) }}>
          Menu item with onClick
        </MenuItem>
        <MenuItem secondaryText="Secondary text">
          Menu item
        </MenuItem>
        <MenuGroup title="Group Title">
          <MenuItem iconStart={<IconCloud />}>Icon at start</MenuItem>
          <MenuItem iconEnd={<IconCloud />}>Icon at end</MenuItem>
          <MenuDivider />
          <MenuItem variant="danger">Danger variant</MenuItem>
          <MenuItem disabled onClick={event => { console.log(event) }}>Disabled menu item</MenuItem>
        </MenuGroup>
      </Menu>
    </DemoLayout>`
};

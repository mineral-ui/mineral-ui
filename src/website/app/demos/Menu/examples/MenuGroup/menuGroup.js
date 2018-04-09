/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Menu, { MenuGroup, MenuItem } from '../../../../../../library/Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'menu-group',
  title: 'Grouping MenuItems',
  backgroundColor: mineralTheme.color_gray_10,
  description: `To group [MenuItems](/components/menu-item) together, wrap them in a MenuGroup.
Optionally, provide a title to provide context if the grouping is large or not immediately obvious.

Your [Menu](/components/menu) may not need a MenuGroup title.
If your Menu is simple, instead consider using a [MenuDivider](/components/menu-divider), which is quicker to scan for your users.`,
  scope: { DemoLayout, Menu, MenuGroup, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuGroup title="Menu Group Title">
          <MenuItem>
            Menu item
          </MenuItem>
          <MenuItem>
            Menu item
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Menu Group Title">
          <MenuItem>
            Menu item
          </MenuItem>
          <MenuItem>
            Menu item
          </MenuItem>
        </MenuGroup>
      </Menu>
    </DemoLayout>`
};

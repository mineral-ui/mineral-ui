/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Menu, {
  MenuDivider,
  MenuGroup,
  MenuItem
} from '../../../../../../library/Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'separating-items',
  title: 'Separating MenuItems',
  backgroundColor: mineralTheme.color_gray_10,
  description: `[MenuItems](/components/menu-item) and [MenuGroups](/components/menu-group) can be separated with a MenuDivider.
MenuDividers are used to create hierarchy by setting some options apart from others.`,
  scope: { DemoLayout, Menu, MenuDivider, MenuGroup, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem>
          Menu item
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          Menu item
        </MenuItem>
        <MenuItem>
          Menu item
        </MenuItem>
        <MenuGroup title="Menu Group Title">
          <MenuItem>
            Menu item
          </MenuItem>
          <MenuItem>
            Menu item
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
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

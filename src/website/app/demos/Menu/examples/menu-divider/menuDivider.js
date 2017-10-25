/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import { mineralTheme } from '../../../../../../themes';
import Menu, { MenuDivider, MenuGroup, MenuItem } from '../../../../../../Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'separating-items',
  title: 'Separating MenuItems',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `[MenuItems](../menu-item) and [MenuGroups](../menu-group) can be separated with a MenuDivider.
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

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
import Menu, { MenuGroup, MenuItem } from '../../../../../../Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'menu-group',
  title: 'Grouping MenuItems',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `To group [MenuItems](../menu-item) together, wrap them in a MenuGroup.
Optionally, provide a title to provide context if the grouping is large or not immediately obvious.

Your [Menu](../menu) may not need a MenuGroup title.
If your Menu is simple, instead consider using a [MenuDivider](../menu-divider), which is quicker to scan for your users.`,
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

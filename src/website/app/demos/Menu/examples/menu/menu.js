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
import IconCloud from '../../../../../../Icon/IconCloud';
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

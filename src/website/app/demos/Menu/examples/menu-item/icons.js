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
import { mineralTheme } from '../../../../../../utils';
import IconCloud from '../../../../../../Icon/IconCloud';
import Menu, { MenuItem } from '../../../../../../Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'icons',
  title: 'Menu Items with Icons',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description:
    'MenuItems can contain [Icons](../icon) at their start, end, or both. If both `startIcon` and `variant` props are provided, `startIcon` will be used.',
  scope: { DemoLayout, IconCloud, Menu, MenuItem },
  source: `
    () => {
      const icon = <IconCloud />;

      return (
        <DemoLayout>
          <Menu>
            <MenuItem iconStart={icon}>Start icon</MenuItem>
            <MenuItem iconEnd={icon}>End icon</MenuItem>
            <MenuItem iconStart={icon} iconEnd={icon}>Both icons</MenuItem>
          </Menu>
          <Menu>
            <MenuItem iconStart={icon} variant="danger">Danger</MenuItem>
            <MenuItem iconStart={icon} variant="success">Success</MenuItem>
            <MenuItem iconStart={icon} variant="warning">Warning</MenuItem>
            <MenuItem iconStart={icon} disabled>Disabled</MenuItem>
          </Menu>
        </DemoLayout>
      );
    }`
};

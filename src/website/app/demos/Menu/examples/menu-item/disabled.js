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
import Menu, { MenuItem } from '../../../../../../Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'disabled',
  title: 'Disabled',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `MenuItems can be disabled.
Render a disabled MenuItem to let your user know that the option is available under the right conditions.

For example, you would disable "Open Recent" if there are no recent files available, yet you want the user to know that feature is available under other conditions.`,
  scope: { DemoLayout, Menu, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem>New File</MenuItem>
        <MenuItem>Open</MenuItem>
        <MenuItem disabled onClick={() => console.log('onClick is not triggered for disabled MenuItems')}>
          Open Recent
        </MenuItem>
        <MenuItem>Save</MenuItem>
      </Menu>
    </DemoLayout>`
};

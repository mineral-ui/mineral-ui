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
  id: 'basic',
  title: 'Basic Usage',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `
MenuItems are used to trigger an action or navigate to a new location.

<Callout title="Note">
  MenuItems normally occupy the full available width of their container.
  The MenuItems here are width-constrained for illustration purposes.
</Callout>`,
  scope: { DemoLayout, Menu, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem>
          Light years
        </MenuItem>
        <MenuItem>
          Star stuff
        </MenuItem>
        <MenuItem>
          Encyclopaedia galactica
        </MenuItem>
      </Menu>
    </DemoLayout>`
};

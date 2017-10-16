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
import mineralTheme from '../../../../../../themes/mineral';
import Menu, { MenuItem } from '../../../../../../Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'secondary-text',
  title: 'Secondary Text',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `A MenuItem can render secondary text, which will wrap when necessary.
Use secondary text to give hints about extra functionality or show app status related to the action.`,
  scope: { DemoLayout, Menu, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem secondaryText="Star stuff">
          Light years
        </MenuItem>
        <MenuItem secondaryText="Distant epochs">
          Harvesting only
        </MenuItem>
        <MenuItem secondaryText="Cosmic ocean">
          Encyclopaedia galactica
        </MenuItem>
      </Menu>
    </DemoLayout>`
};

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
  id: 'variants',
  title: 'Variants',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `Use available [variants](/color#color-variants) to help communicate purpose.
A \`startIcon\` will be automatically inserted to reinforce the intent.`,
  scope: { DemoLayout, Menu, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem variant="danger">
          Danger
        </MenuItem>
        <MenuItem variant="success">
          Success
        </MenuItem>
        <MenuItem variant="warning">
          Warning
        </MenuItem>
      </Menu>
    </DemoLayout>`
};

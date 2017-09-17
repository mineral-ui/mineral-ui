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
import Menu, { MenuItem } from '../../../../../../Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'with-arrow',
  title: 'With Arrow',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: '`MenuItem`s can display an arrow to offer necessary affordance',
  scope: { DemoLayout, Menu, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem withArrow>With arrow</MenuItem>
        <MenuItem withArrow>With arrow</MenuItem>
        <MenuItem withArrow>With arrow</MenuItem>
      </Menu>
    </DemoLayout>`
};

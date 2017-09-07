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

export default {
  id: 'basic',
  title: 'Basic Menu',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: 'This is a menu',
  scope: { Menu, MenuItem },
  source: `
    <Menu>
      <MenuItem>
        Light years star stuff harvesting star light citizens of distant
        epochs encyclopaedia galactica vastness is bearable only through love,
        shores of the cosmic ocean!
      </MenuItem>
    </Menu>`
};

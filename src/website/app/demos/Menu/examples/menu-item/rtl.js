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
import ThemeProvider from '../../../../../../ThemeProvider';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'rtl',
  title: 'RTL Support',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: '',
  scope: { DemoLayout, IconCloud, Menu, MenuItem, ThemeProvider },
  source: `
    <DemoLayout dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Menu>
          <MenuItem iconStart={<IconCloud />}>رمز البدء</MenuItem>
          <MenuItem iconEnd={<IconCloud />}>رمز النهاية</MenuItem>
          <MenuItem withArrow>مع السهم</MenuItem>
        </Menu>
      </ThemeProvider>
    </DemoLayout>`
};

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
import IconHelp from '../../../../../../Icon/IconHelp';
import Menu, { MenuItem } from '../../../../../../Menu';
import { mineralTheme, ThemeProvider } from '../../../../../../themes';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'rtl',
  title: 'RTL Support',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `MenuItems with Icons are reversed when the \`rtl\` prop is set.
A subset of Icons that [convey directionality](./icon#rtl) will be reversed.`,
  scope: { DemoLayout, IconHelp, Menu, MenuItem, ThemeProvider },
  source: `
    <DemoLayout dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Menu>
          <MenuItem>نص عنصر القائمة</MenuItem>
          <MenuItem secondaryText="نص ثانوي">نص عنصر القائمة</MenuItem>
          <MenuItem iconStart={<IconHelp />}>رمز البدء</MenuItem>
          <MenuItem iconEnd={<IconHelp />}>رمز النهاية</MenuItem>
        </Menu>
      </ThemeProvider>
    </DemoLayout>`
};

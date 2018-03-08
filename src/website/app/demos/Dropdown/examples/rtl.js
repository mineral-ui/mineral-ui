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
import { createStyledComponent, pxToEm } from '../../../../../styles';
import Button from '../../../../../Button';
import Dropdown from '../../../../../Dropdown';
import { ThemeProvider } from '../../../../../themes';
import data from '../../Menu/components/menuData';

const DemoLayout = createStyledComponent('div', {
  paddingBottom: pxToEm(130)
});

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Dropdowns support right-to-left (RTL) languages. The placement of
the menu as well as the menu itself will be reversed when the \`direction\`
theme variable is set to \`rtl\`.`,
  scope: { Button, data, DemoLayout, Dropdown, ThemeProvider },
  source: `
    <DemoLayout dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Dropdown data={data} isOpen>
          <Button>Menu</Button>
        </Dropdown>
      </ThemeProvider>
    </DemoLayout>`
};

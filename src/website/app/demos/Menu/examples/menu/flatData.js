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
import IconCloud from 'mineral-ui-icons/IconCloud';
import Menu from '../../../../../../Menu';
import CustomRender from '../../components/CustomRender';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'data',
  title: 'Flat Data',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `Menu content can also be defined by an array of data, with the
structure shown in the code example below. Object properties will be passed on
to the [MenuItem](../menu-item).

[MenuDividers](../menu-divider) are created simply by passing
\`{divider: true}\` as an item.`,
  scope: { CustomRender, DemoLayout, IconCloud, Menu },
  source: `
    () => {
      const data = [
        {
          text: 'Menu item with onClick',
          onClick: event => { console.log(event); }
        },
        {
          text: 'Menu item',
          secondaryText: 'Secondary text'
        },
        {
          text: 'Icon at start',
          iconStart: <IconCloud />
        },
        {
          text: 'Icon at end',
          iconEnd: <IconCloud />
        },
        {
          divider: true
        },
        {
          text: 'Danger variant',
          variant: 'danger' // 'danger' | 'success' | 'warning'
        },
        {
          text: 'Disabled menu item',
          disabled: true,
          onClick: () => { console.log('onClick is not triggered for disabled items'); }
        },
        {
          text: 'Custom render',
          avatar: '/images/125x125.png',
          href: '/components/menu-item#custom-render', // <-- Details here
          render: CustomRender
        }
      ];

      return (
        <DemoLayout>
          <Menu data={data} />
        </DemoLayout>
      );
    }`
};

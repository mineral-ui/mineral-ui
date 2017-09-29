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
import Button from '../../../../../Button';
import IconCloud from '../../../../../Icon/IconCloud';
import Dropdown from '../../../../../Dropdown';
import CustomRender from '../../Menu/components/CustomRender';

export default {
  id: 'data',
  title: 'Data-Driven',
  description: `Dropdown items are defined by an array of data, with the
    structure below. Object properties in the \`items\` array(s) will be passed
    on to the [MenuItem](./menu-item).`,
  scope: {
    Button,
    CustomRender,
    Dropdown,
    IconCloud
  },
  source: `
    () => {
      const data = [
        {
          items: [
            {
              text: 'Menu item with onClick',
              onClick: event => { console.log(event); }
            },
            {
              text: 'Menu item',
              secondaryText: 'Secondary text'
            }
          ]
        },
        {
          title: 'Group Title',
          items: [
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
              onClick: event => { console.log(event); },
              disabled: true
            },
            {
              text: 'Custom render',
              avatar: 'http://www.fillmurray.com/102/100',
              href: '/components/menu-item#custom-render', // <-- Details here
              render: CustomRender
            }
          ]
        }
      ];

      return (
        <Dropdown data={data}>
          <Button>Menu</Button>
        </Dropdown>
      );
    }`
};

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
import IconCloud from 'mineral-ui-icons/IconCloud';
import Select from '../../../../../Select';
import CustomRender from '../../Menu/components/CustomRender';

export default {
  id: 'data',
  title: 'Data-Driven',
  description: `Select options are defined by an array of data, with the
structure shown in the code example below. Object properties will be passed on
to the [MenuItem](../menu-item).

[MenuDividers](../menu-divider) are created simply by passing
\`{divider: true}\` as an item. Menu data can also be
[grouped](../menu/grouped-data).`,
  scope: { Button, CustomRender, Select, IconCloud },
  source: `
    () => {
      const data = [
        {
          text: 'Menu item',
          secondaryText: 'Secondary text',
          value: 'basic'
        },
        {
          text: 'Icon at start',
          iconStart: <IconCloud />,
          value: 'iconStart'
        },
        {
          text: 'Icon at end',
          iconEnd: <IconCloud />,
          value: 'iconEnd'
        },
        {
          divider: true
        },
        {
          text: 'Danger variant',
          variant: 'danger', // 'danger' | 'success' | 'warning'
          value: 'variant'
        },
        {
          text: 'Disabled menu item',
          onClick: () => { console.log('onClick is not triggered for disabled MenuItems'); },
          disabled: true,
          value: 'disabled'
        },
        {
          text: 'Custom render', // See Custom Render example in MenuItem
          avatar: '/images/avatar.svg',
          render: CustomRender,
          value: 'custom'
        }
      ];

      return <Select data={data} />;
    }`
};

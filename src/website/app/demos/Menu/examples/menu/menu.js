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
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'basic',
  title: 'Basic Menu',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description:
    'This is a menu. For more detailed examples, see [MenuDivider](./menu-divider), [MenuHeading](./menu-heading), and [MenuItem](./menu-item).',
  scope: { DemoLayout, IconCloud, Menu, MenuItem },
  source: `
    () => {
      const menuItems = [
        {
          disabled: true,
          text: 'Menu item (disabled)'
        },
        {
          divider: true
        },
        {
          heading: true,
          text: 'Menu Heading'
        },
        {
          iconStart: <IconCloud />,
          text: 'Icon at start'
        },
        {
          iconEnd: <IconCloud />,
          text: 'Icon at end'
        },
        {
          onClick: event => { console.log(event); },
          text: 'Menu item with onClick'
        },
        {
          secondaryText: 'Secondary text',
          text: 'Menu item'
        },
        {
          text: 'Danger variant',
          variant: 'danger' // 'danger' | 'success' | 'warning'
        },
        {
          withArrow: true,
          text: 'With arrow'
        }
      ];

      return (
        <DemoLayout>
          <Menu data={menuItems} />
        </DemoLayout>
      );
    }`
};

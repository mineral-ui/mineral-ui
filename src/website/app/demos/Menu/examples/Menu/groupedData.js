/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Menu from '../../../../../../library/Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'grouped-data',
  title: 'Grouped Data',
  backgroundColor: mineralTheme.color_gray_10,
  description: `Menu items can be grouped by using the structure shown in the
code example below. Object properties in the \`items\` array(s) will be passed
on to the [MenuItem](/components/menu-item).

A new [MenuGroup](/components/menu-group) will be created for each array object that has
an \`items\` property defined.`,
  scope: { DemoLayout, IconCloud, Menu },
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
              disabled: true,
              onClick: () => { console.log('onClick is not triggered for disabled items'); }
            }
          ]
        }
      ];

      return (
        <DemoLayout>
          <Menu data={data} itemKey="text" />
        </DemoLayout>
      );
    }`
};

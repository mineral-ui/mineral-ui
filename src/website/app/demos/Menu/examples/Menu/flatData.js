/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Menu from '../../../../../../library/Menu';
import CustomRender from '../../components/CustomRender';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'data',
  title: 'Flat Data',
  backgroundColor: mineralTheme.color_gray_10,
  description: `Menu content can also be defined by an array of data, with the
structure shown in the code example below. Object properties will be passed on
to the [MenuItem](/components/menu-item).

[MenuDividers](/components/menu-divider) are created simply by passing
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

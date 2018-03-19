/* @flow */
import Button from '../../../../../library/Button';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Select from '../../../../../library/Select';
import CustomRender from '../../Menu/components/CustomRender';

export default {
  id: 'data',
  title: 'Data-Driven',
  description: `Select options are defined by an array of data, with the
structure shown in the code example below. Object properties will be passed on
to the [MenuItem](/components/menu-item).

[MenuDividers](/components/menu-divider) are created simply by passing
\`{divider: true}\` as an item. Menu data can also be
[grouped](/components/menu#grouped-data).`,
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

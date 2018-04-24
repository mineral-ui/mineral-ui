/* @flow */
import Button from '../../../../../library/Button';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Dropdown from '../../../../../library/Dropdown';

export default {
  id: 'data',
  title: 'Data-Driven',
  description: `Dropdown content is defined by an array of data, with the
structure shown in the code example below. Object properties will be passed on
to the [MenuItem](/components/menu-item).

[MenuDividers](/components/menu-divider) are created simply by passing
\`{divider: true}\` as an item. Menu data can also be
[grouped](/components/menu#grouped-data).`,
  scope: { Button, Dropdown, IconCloud },
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
          onClick: () => { console.log('onClick is not triggered for disabled MenuItems'); },
          disabled: true
        }
      ];

      return (
        <Dropdown data={data}>
          <Button>Menu</Button>
        </Dropdown>
      );
    }`
};

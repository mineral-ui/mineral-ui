/* @flow */
import Button from '../../../../../../library/Button';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Dropdown from '../../../../../../library/Dropdown';

export default {
  id: 'data',
  title: 'Data-Driven',
  description: `Dropdown content is defined by an array of data, with the
structure shown in the code example below. Object properties will be passed on
to the [MenuItem](/components/menu-item).

[MenuDividers](/components/menu-divider) are created simply by passing
\`{ divider: true }\` as an item.

[MenuGroups](/components/menu-group) are created simply by passing
\`{ group: true, title: 'Group Title' }\` as an item.`,
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
          text: 'Disabled menu item',
          onClick: () => { console.log('onClick is not triggered for disabled MenuItems'); },
          disabled: true
        },
        {
          title: 'Group Title',
          group: true
        },
        {
          text: 'Success variant',
          variant: 'success'
        },
        {
          text: 'Warning variant',
          variant: 'warning'
        },
        {
          text: 'Danger variant',
          variant: 'danger'
        }
      ];

      return (
        <Dropdown data={data}>
          <Button>Menu</Button>
        </Dropdown>
      );
    }`
};

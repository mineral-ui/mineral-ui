/* @flow */
import Button from '../../../../../../library/Button';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Select from '../../../../../../library/Select';

export default {
  id: 'data',
  title: 'Data-Driven',
  description: `Select options are defined by an array of data, with the
structure shown in the code example below. Object properties will be passed on
to the [MenuItem](/components/menu-item).

[MenuDividers](/components/menu-divider) are created simply by passing
\`{ divider: true }\` as an item.

[MenuGroups](/components/menu-group) are created simply by passing
\`{ group: true, title: 'Group Title' }\` as an item.`,
  scope: { Button, Select, IconCloud },
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
          text: 'Disabled menu item',
          onClick: () => { console.log('onClick is not triggered for disabled MenuItems'); },
          disabled: true,
          value: 'disabled'
        },
        {
          group: true,
          title: 'Group Title'
        },
        {
          text: 'Success variant',
          value: 'success',
          variant: 'success'
        },
        {
          text: 'Warning variant',
          value: 'warning',
          variant: 'warning'
        },
        {
          text: 'Danger variant',
          value: 'danger',
          variant: 'danger'
        }
      ];

      return <Select data={data} />;
    }`
};

/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Menu from '../../../../../../library/Menu';
import DemoLayout from '../../common/DemoLayout';

export default {
  id: 'data',
  title: 'Data-Driven',
  backgroundColor: mineralTheme.color_gray_10,
  description: `Menu content can also be defined by an array of data, with the
structure shown in the code example below. Object properties will be passed on
to the [MenuItem](/components/menu-item).

[MenuDividers](/components/menu-divider) are created simply by passing
\`{ divider: true }\` as an item.

[MenuGroups](/components/menu-group) are created simply by passing
\`{ group: true, title: 'Group Title' }\` as an item.`,
  scope: { DemoLayout, IconCloud, Menu },
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
          disabled: true,
          onClick: () => { console.log('onClick is not triggered for disabled items'); }
        },
        {
          group: true,
          title: 'Group Title'
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
        <DemoLayout>
          <Menu data={data} itemKey="text" />
        </DemoLayout>
      );
    }`
};

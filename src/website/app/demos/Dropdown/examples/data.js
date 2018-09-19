/* @flow */
import Button from '../../../../../library/Button';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Dropdown from '../../../../../library/Dropdown';
import { largeGroupedData as data } from '../../Select/components/selectData';

export default {
  id: 'data',
  title: 'Data-Driven',
  description: `Dropdown content is defined by an array of data, with the
structure shown in the code example below. Object properties will be passed on
to the [MenuItem](/components/menu-item).

[MenuDividers](/components/menu-divider) are created simply by passing
\`{divider: true}\` as an item. Menu data can also be
[grouped](/components/menu#grouped-data).`,
  scope: { Button, data, Dropdown, IconCloud },
  source: `
    <Dropdown data={data} isOpen>
      <Button>Menu</Button>
    </Dropdown>
  `
};

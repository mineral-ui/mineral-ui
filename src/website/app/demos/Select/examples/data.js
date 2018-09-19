/* @flow */
import Button from '../../../../../library/Button';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Select from '../../../../../library/Select';
// import { largeData as data } from '../components/selectData';
import { largeGroupedData as data } from '../components/selectData';

export default {
  id: 'data',
  title: 'Data-Driven',
  description: `Select options are defined by an array of data, with the
structure shown in the code example below. Object properties will be passed on
to the [MenuItem](/components/menu-item).

[MenuDividers](/components/menu-divider) are created simply by passing
\`{divider: true}\` as an item. Menu data can also be
[grouped](/components/menu#grouped-data).`,
  scope: { Button, data, Select, IconCloud },
  source: `
    <Select data={data} />;
  `
};

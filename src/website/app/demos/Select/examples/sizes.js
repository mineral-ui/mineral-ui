/* @flow */
import DemoLayout from '../components/DemoLayout';
import Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';

export default {
  id: 'size',
  title: 'Available Sizes',
  description: `Select is available in a few sizes.`,
  scope: { data, DemoLayout, Select },
  source: `
    <DemoLayout>
      <Select size="small" data={data} placeholder="Small" />
      <Select size="medium" data={data} placeholder="Medium" />
      <Select data={data} placeholder="Large" />
      <Select size="jumbo" data={data} placeholder="Jumbo" />
    </DemoLayout>
  `
};

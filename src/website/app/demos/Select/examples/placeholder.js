/* @flow */
import Select from '../../../../../library/Select';
import { statesData as data } from '../components/selectData';

export default {
  id: 'placeholder',
  title: 'Placeholder Text',
  description: `You can optionally customize the placeholder text to provide a
more helpful prompt.`,
  scope: { data, Select },
  source: `
    <Select data={data} placeholder="Choose a state..." />
  `
};

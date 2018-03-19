/* @flow */
import Select from '../../../../../library/Select';
import { statesData as data } from '../components/selectData';

export default {
  id: 'uncontrolled',
  title: 'Uncontrolled',
  description: `Uncontrolled Selects behave just like HTML select elements.
The value is handled by the DOM. The main differences are that you must use
\`defaultSelectedItem\` to set the initially selected item.`,
  scope: { data, Select },
  source: `
    <Select data={data} name="state" defaultSelectedItem={data[5]} />
  `
};

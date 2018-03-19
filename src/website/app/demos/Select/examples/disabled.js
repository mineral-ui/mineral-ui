/* @flow */
import Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `Use the \`disabled\` prop to indicate that the component is not
available for interaction.`,
  scope: { data, Select },
  source: `
    <Select data={data} disabled />
  `
};

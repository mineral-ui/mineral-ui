/* @flow */
import Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';

export default {
  id: 'read-only',
  title: 'Read Only',
  description: `The \`readOnly\` prop indicates that the input value cannot be
modified by the user.`,
  scope: { data, Select },
  source: `
    <Select data={data} selectedItem={data[0]} readOnly />
  `
};

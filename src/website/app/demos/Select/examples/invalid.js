/* @flow */
import Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';

export default {
  id: 'invalid',
  title: 'Invalid',
  description: `The \`invalid\` prop on a Select does nothing visually on its
own, but is important for accessibility. See FormField's
[Validation](/components/form-field#validation) example for more info.`,
  scope: { data, Select },
  source: `
    <Select data={data} invalid />
  `
};

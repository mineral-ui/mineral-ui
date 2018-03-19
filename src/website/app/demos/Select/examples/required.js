/* @flow */
import Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';

export default {
  id: 'required',
  title: 'Required',
  description: `The \`required\` prop on a Select does nothing visually on
its own, but is important for accessibility. See FormField's
[Required](/components/form-field#required) and [Validation](/components/form-field#validation)
examples for more information.`,
  scope: { data, Select },
  source: `
    <Select data={data} required />
  `
};

/* @flow */
import { FormField } from '../../../../../library/Form';
import Select from '../../../../../library/Select';
import DemoLayout from '../components/DemoLayout';
import { statesData as data } from '../components/selectData';

export default {
  id: 'form-field',
  title: 'FormField',
  description: `Use a [FormField](/components/form-field) to provide an accessible label
and other features as well as a more streamlined API.`,
  scope: { data, DemoLayout, FormField, Select },
  source: `
    <DemoLayout>
      <FormField
        input={Select}
        data={data}
        name="state"
        placeholder="Choose a state..."
        label="State"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        required />
    </DemoLayout>
  `
};

/* @flow */
import TextArea from '../../../../../TextArea';
import { FormField } from '../../../../../Form';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'form-field',
  title: 'FormField',
  description: `Use a [FormField](../form-field) to provide an accessible label
and other features as well as a more streamlined API.`,
  scope: { DemoLayout, FormField, TextArea },
  source: `
    <DemoLayout>
      <FormField
        input={TextArea}
        label="Comments"
        caption="Please keep comments brief and descriptive"
        rows={2}
        autoSize
        required />
    </DemoLayout>
  `
};

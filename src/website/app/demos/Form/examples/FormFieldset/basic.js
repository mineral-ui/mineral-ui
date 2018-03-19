/* @flow */
import DemoLayout from '../../components/DemoLayout';
import TextInput from '../../../../../../library/TextInput';
import { FormField, FormFieldset } from '../../../../../../library/Form';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Wrap any number of [FormFields](/components/form-field) in a
FormFieldset to semantically group them. A brief, descriptive legend is
especially useful for users of screen readers and other
[assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology).`,
  scope: { DemoLayout, FormField, FormFieldset, TextInput },
  source: `
    <FormFieldset legend="Login">
      <DemoLayout>
        <FormField label="Email">
          <TextInput type="email" />
        </FormField>
        <FormField label="Password">
          <TextInput type="password" />
        </FormField>
      </DemoLayout>
    </FormFieldset>
  `
};

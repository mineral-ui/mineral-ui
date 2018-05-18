/* @flow */
import { FormField, FormFieldDivider } from '../../../../../../library/Form';
import TextInput from '../../../../../../library/TextInput';
import DemoLayout from '../../../shared/DemoLayout';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use a FormFieldDivider to create implicit groups of
[FormFields](/components/form-field). For more semantic grouping, use a
[FormFieldset](/components/form-fieldset).`,
  scope: { DemoLayout, FormField, FormFieldDivider, TextInput },
  source: `
    <DemoLayout>
      <FormField label="Old Password">
        <TextInput type="password" />
      </FormField>

      <FormFieldDivider />

      <FormField label="New Password">
        <TextInput type="password" />
      </FormField>
      <FormField label="Repeat New Password">
        <TextInput type="password" />
      </FormField>
    </DemoLayout>
  `
};

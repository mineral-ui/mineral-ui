/* @flow */
import DemoLayout from '../../components/DemoLayout';
import TextInput from '../../../../../../TextInput';
import { FormField, FormFieldDivider } from '../../../../../../Form';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use a FormFieldDivider to create implicit groups of
[FormFields](../form-field). For more semantic grouping, use a
[FormFieldset](../form-fieldset).`,
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

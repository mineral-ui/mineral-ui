/* @flow */
import DemoLayout from '../../components/DemoLayout';
import TextInput from '../../../../../../library/TextInput';
import { FormField, FormFieldset } from '../../../../../../library/Form';

export default {
  id: 'disabled',
  title: 'Disabled',
  description:
    'If you disable a FormFieldset, be sure you also disable all child controls.',
  scope: { DemoLayout, FormField, FormFieldset, TextInput },
  source: `
    <FormFieldset legend="Login" disabled>
      <DemoLayout>
        <FormField label="Email">
          <TextInput type="email" disabled />
        </FormField>
        <FormField label="Password">
          <TextInput type="password" disabled />
        </FormField>
      </DemoLayout>
    </FormFieldset>
  `
};

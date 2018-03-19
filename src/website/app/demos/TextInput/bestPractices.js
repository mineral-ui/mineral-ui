/* @flow */
import React from 'react';
import FormField from '../../../../library/Form/FormField';
import TextInput from '../../../../library/TextInput/';
import DemoLayout from './components/DemoLayout';

export default [
  {
    type: 'do',
    description: `Wrap TextInput in a [FormField](/components/form-field) and provide a
brief, descriptive label.`,
    example: <FormField input={TextInput} label="Name" />
  },
  {
    type: 'do',
    description: `Use a \`placeholder\` to hint the expected content.`,
    example: (
      <FormField
        input={TextInput}
        label="Account Number"
        placeholder="12345-123"
      />
    )
  },
  {
    type: 'dont',
    description: `Don't use a \`placeholder\` as a field label. This is not
accessible and a poor experience.`,
    example: <TextInput placeholder="Name" />
  },
  {
    type: 'do',
    description: `Use a \`prefix\` or \`suffix\` to specify the expected units
for the input or other pertinent information.`,
    example: (
      <DemoLayout>
        <FormField input={TextInput} label="Price" type="number" prefix="$" />
        <FormField input={TextInput} label="Length" type="number" suffix="cm" />
        <FormField
          input={TextInput}
          label="Phone Number"
          type="tel"
          prefix="+1"
          placeholder="(555) 555-5555"
        />
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    description: `Don't use a \`prefix\` or \`suffix\` as a field label.`,
    example: <TextInput prefix="Name" />
  },
  {
    type: 'do',
    description: `Use the appropriate \`type\` for the expected content. This is
especially useful on mobile devices, as a specialized keyboard will be used.`,
    example: (
      <DemoLayout>
        <FormField input={TextInput} label="Name" />
        <FormField input={TextInput} label="Date" type="date" />
        <FormField input={TextInput} label="Quantity" type="number" />
        <FormField input={TextInput} label="Phone Number" type="tel" />
        <FormField input={TextInput} label="Website" type="url" />
      </DemoLayout>
    )
  }
];

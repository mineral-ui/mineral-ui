/* @flow */
import TextInput from '../../../../../../TextInput';
import FormField from '../../../../../../Form/FormField';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'hide-label',
  title: 'Visually Hidden Label',
  description: `If the purpose of a FormField is obvious from context and adding
a label would negatively affect the design, as in the example below, you can use
\`hideLabel\` to visually hide the label while retaining accessibility.`,
  scope: { DemoLayout, FormField, TextInput },
  source: `
    <DemoLayout>
      <FormField
        input={TextInput}
        label="Address"
        placeholder="1234 Main St" />
      <FormField
        input={TextInput}
        label="Address Line 2"
        placeholder="Apt 101"
        hideLabel />
    </DemoLayout>
  `
};

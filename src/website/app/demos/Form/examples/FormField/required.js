/* @flow */
import DemoLayout from '../../components/DemoLayout';
import TextInput from '../../../../../../library/TextInput';
import FormField from '../../../../../../library/Form/FormField';

export default {
  id: 'required',
  title: 'Required',
  description: `Marking a FormField as required will display the \`requiredText\`
and pass along the \`required\` prop to the child input. \`requiredText\` takes
precedence over \`secondaryText\`.`,
  scope: { DemoLayout, FormField, TextInput },
  source: `
    <DemoLayout>
      <FormField
        input={TextInput}
        label="Name"
        required />
      <FormField
        input={TextInput}
        label="Nombre"
        required
        requiredText="Necesario" />
    </DemoLayout>
  `
};

/* @flow */
import DemoLayout from '../../components/DemoLayout';
import TextArea from '../../../../../../library/TextArea';
import TextInput from '../../../../../../library/TextInput';
import FormField from '../../../../../../library/Form/FormField';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `FormField accepts any input, either to the \`input\` prop or
\`children\`, accessibly connecting the label to it.`,
  scope: { DemoLayout, FormField, TextArea, TextInput },
  source: `
    <DemoLayout>
      {/* Use the "input" prop for a streamlined approach. */}
      <FormField input={TextInput} label="Name" />

      {/* Or use "children", if you prefer. */}
      <FormField label="Description">
        <TextArea />
      </FormField>
    </DemoLayout>
  `
};

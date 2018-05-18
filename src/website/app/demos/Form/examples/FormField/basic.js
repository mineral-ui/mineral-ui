/* @flow */
import FormField from '../../../../../../library/Form/FormField';
import TextArea from '../../../../../../library/TextArea';
import TextInput from '../../../../../../library/TextInput';
import DemoLayout from '../../../shared/DemoLayout';

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

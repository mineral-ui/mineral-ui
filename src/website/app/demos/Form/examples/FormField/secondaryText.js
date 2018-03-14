/* @flow */
import TextInput from '../../../../../../TextInput';
import FormField from '../../../../../../Form/FormField';

export default {
  id: 'secondaryText',
  title: 'Secondary Text',
  description: `Use the \`secondaryText\` prop to provide brief additional
details to the label text. Note that if \`requiredText\` is provided, it
displays instead of \`secondaryText\`.`,
  scope: { FormField, TextInput },
  source: `
    <FormField
      input={TextInput}
      label="Name"
      secondaryText="Optional" />
  `
};

/* @flow */
import TextInput from '../../../../../../library/TextInput';
import FormField from '../../../../../../library/Form/FormField';

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

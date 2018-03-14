/* @flow */
import TextInput from '../../../../../../TextInput';
import FormField from '../../../../../../Form/FormField';

export default {
  id: 'caption',
  title: 'Caption',
  description: `Use a \`caption\` to display not-so-brief additional information,
such as help text or, along with a [variant](#variants), a
[validation message](#validation).`,
  scope: { FormField, TextInput },
  source: `
    <FormField
      input={TextInput}
      label="Name"
      caption="This is help text" />
  `
};

/* @flow */
import TextInput from '../../../../../TextInput';

export default {
  id: 'invalid',
  title: 'Invalid',
  description: `The \`invalid\` prop on a TextInput does nothing visually on its
own, but is important for accessibility. See FormField's
[Validation](../form-field/#validation) example for more info.`,
  scope: { TextInput },
  source: `
    <TextInput invalid />
  `
};

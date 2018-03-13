/* @flow */
import TextArea from '../../../../../TextArea';

export default {
  id: 'required',
  title: 'Required',
  description: `The \`required\` prop on a TextArea does nothing visually on
its own, but is important for accessibility. See FormField's
[Required](../form-field/#required) and [Validation](../form-field/#validation)
examples for more information.`,
  scope: { TextArea },
  source: `
    <TextArea required />
  `
};

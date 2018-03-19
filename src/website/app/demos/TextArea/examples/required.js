/* @flow */
import TextArea from '../../../../../library/TextArea';

export default {
  id: 'required',
  title: 'Required',
  description: `The \`required\` prop on a TextArea does nothing visually on
its own, but is important for accessibility. See FormField's
[Required](/components/form-field#required) and [Validation](/components/form-field#validation)
examples for more information.`,
  scope: { TextArea },
  source: `
    <TextArea required />
  `
};

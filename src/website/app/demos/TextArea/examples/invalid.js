/* @flow */
import TextArea from '../../../../../library/TextArea';

export default {
  id: 'invalid',
  title: 'Invalid',
  description: `The \`invalid\` prop on a TextArea does nothing visually on its
own, but is important for accessibility. See FormField's
[Validation](/components/form-field#validation) example for more info.`,
  scope: { TextArea },
  source: `
    <TextArea invalid />
  `
};

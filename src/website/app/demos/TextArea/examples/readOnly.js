/* @flow */
import TextArea from '../../../../../library/TextArea';

export default {
  id: 'read-only',
  title: 'Read Only',
  description: `The \`readOnly\` prop indicates that the input value cannot be
modified by the user.`,
  scope: { TextArea },
  source: `
    <TextArea defaultValue="Hello World" readOnly />
  `
};

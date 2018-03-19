/* @flow */
import TextInput from '../../../../../library/TextInput/';

export default {
  id: 'read-only',
  title: 'Read Only',
  description: `The \`readOnly\` prop indicates that the input value cannot be
modified by the user.`,
  scope: { TextInput },
  source: `
    <TextInput defaultValue="Hello World" readOnly />
  `
};

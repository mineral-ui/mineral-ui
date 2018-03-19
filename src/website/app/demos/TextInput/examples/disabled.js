/* @flow */
import TextInput from '../../../../../library/TextInput/';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `Use the \`disabled\` prop to indicate that the input is not
available for interaction.`,
  scope: { TextInput },
  source: `
    <TextInput defaultValue="Hello World" disabled />
  `
};

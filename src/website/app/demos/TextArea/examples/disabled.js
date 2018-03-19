/* @flow */
import TextArea from '../../../../../library/TextArea';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `Use the \`disabled\` prop to indicate that the input is not
available for interaction.`,
  scope: { TextArea },
  source: `
    <TextArea defaultValue="Hello World" disabled />
  `
};

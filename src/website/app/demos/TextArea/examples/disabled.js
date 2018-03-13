/* @flow */
import TextArea from '../../../../../TextArea';

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

/* @flow */
import TextInput from '../../../../../library/TextInput/';

export default {
  id: 'placeholder',
  title: 'Placeholder Text',
  description:
    'Provide a placeholder as a helpful prompt of the expected content.',
  scope: { TextInput },
  source: `
    <TextInput placeholder="12345-123" />
  `
};

/* @flow */
import TextArea from '../../../../../library/TextArea';

export default {
  id: 'placeholder',
  title: 'Placeholder Text',
  description:
    'Provide a placeholder as a helpful prompt of the expected content.',
  scope: { TextArea },
  source: `
    <TextArea placeholder="Leave a comment" />
  `
};

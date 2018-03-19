/* @flow */
import DemoLayout from '../components/DemoLayout';
import TextArea from '../../../../../library/TextArea';

export default {
  id: 'rows',
  title: 'Rows',
  description: `Use the \`rows\` prop to adjust the number of lines displayed.
  Note that the \`rows\` prop is complementary to \`size\`.`,
  scope: { DemoLayout, TextArea },
  source: `
    <DemoLayout>
      <TextArea rows={1} size="small" defaultValue="Small" />
      <TextArea rows={1} size="medium" defaultValue="Medium" />
      <TextArea rows={1} defaultValue="Large" />
      <TextArea rows={1} size="jumbo" defaultValue="Jumbo" />
    </DemoLayout>
  `
};

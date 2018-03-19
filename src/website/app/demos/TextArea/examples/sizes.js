/* @flow */
import DemoLayout from '../components/DemoLayout';
import TextArea from '../../../../../library/TextArea';

export default {
  id: 'size',
  title: 'Available Sizes',
  description: `TextArea is available in a few different sizes.  Note that the
\`rows\` prop is complementary to \`size\` and can be used to adjust the number
of lines displayed. See the [Rows](#rows) example for more details.`,
  scope: { DemoLayout, TextArea },
  source: `
    <DemoLayout>
      <TextArea size="small" defaultValue="Small" />
      <TextArea size="medium" defaultValue="Medium" />
      <TextArea defaultValue="Large" />
      <TextArea size="jumbo" defaultValue="Jumbo" />
    </DemoLayout>
  `
};

/* @flow */
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Dialogs should have a brief and descriptive \`title\`, present
contextual information, and require a user decision or acknowledgment through
\`actions\`.`,
  scope: {
    DemoLayout,
    Dialog
  },
  source: `
    <DemoLayout>
      <Dialog
        title="Lorem ipsum dolor sit amet"
        actions={[
          { text: 'Cancel' },
          { text: 'Action' }
        ]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Dialog>
    </DemoLayout>`
};

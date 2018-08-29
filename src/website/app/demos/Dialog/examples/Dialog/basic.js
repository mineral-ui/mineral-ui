/* @flow */
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';
import Text from '../../../../../../library/Text';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Dialogs should have a brief and descriptive \`title\`, present
contextual information, and require a user decision or acknowledgment through
\`actions\`.`,
  scope: {
    DemoLayout,
    Dialog,
    Text
  },
  source: `
    <DemoLayout>
      <Dialog
        title="Lorem ipsum dolor sit amet"
        actions={[
          { text: 'Cancel' },
          { text: 'Action' }
        ]}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Dialog>
    </DemoLayout>`
};

/* @flow */
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'close-button',
  title: 'Close Button',
  description: `The \`showCloseButton\` prop adds a button to the end of
[DialogHeader](/components/dialog-header) which closes the Dialog on click.`,
  scope: {
    DemoLayout,
    Dialog
  },
  source: `
    <DemoLayout>
      <Dialog
        showCloseButton
        title="Lorem ipsum dolor sit amet"
        actions={[
          { text: 'Cancel' },
          { text: 'Action' }
        ]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Dialog>
    </DemoLayout>
  `
};

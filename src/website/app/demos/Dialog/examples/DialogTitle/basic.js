/* @flow */
import { DialogTitle, DialogHeader } from '../../../../../../library/Dialog';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Display a title with predefined Mineral styles. Providing
DialogTitle content also automatically creates an accessible label for the
Dialog.

  <Callout title="Note">
    <p key={0}>
      DialogTitle must be wrapped in
      a <a href="/components/dialog-header" key={0}>DialogHeader</a>.
    </p>
  </Callout>`,
  scope: {
    DemoLayout,
    Dialog,
    DialogHeader,
    DialogTitle
  },
  source: `
    <DemoLayout>
      <Dialog>
        <DialogHeader>
          <DialogTitle>
            Title
          </DialogTitle>
        </DialogHeader>
      </Dialog>
    </DemoLayout>`
};

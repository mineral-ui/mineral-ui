/* @flow */
import Button from '../../../../../../library/Button';
import IconClear from 'mineral-ui-icons/IconClear';
import { DialogHeader, DialogTitle } from '../../../../../../library/Dialog';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'close-button',
  title: 'Close Button',
  description: `Use the \`closeButton\` prop to provide your own close button
for Dialog.`,
  scope: {
    Button,
    DemoLayout,
    Dialog,
    DialogHeader,
    DialogTitle,
    IconClear
  },
  source: `
    <DemoLayout>
      <Dialog>
        <DialogHeader
          closeButton={<Button
            iconStart={<IconClear />}
            aria-label="Close"
            size="small"
            variant="danger"
          />}
        >
          <DialogTitle>Title</DialogTitle>
        </DialogHeader>
      </Dialog>
    </DemoLayout>`
};

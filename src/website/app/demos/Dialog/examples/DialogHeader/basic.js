/* @flow */
import Button from '../../../../../../library/Button';
import IconClear from 'mineral-ui-icons/IconClear';
import { DialogHeader, DialogTitle } from '../../../../../../library/Dialog';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `DialogHeader is used to prepend a header to a Dialog. It can
contain any children, but is best used with
[DialogTitle](/components/dialog-title).`,
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
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
        </DialogHeader>
      </Dialog>
    </DemoLayout>`
};

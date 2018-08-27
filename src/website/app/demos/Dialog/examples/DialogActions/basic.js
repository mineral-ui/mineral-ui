/* @flow */
import Button from '../../../../../../library/Button';
import {
  DialogActions,
  DialogHeader,
  DialogTitle
} from '../../../../../../library/Dialog';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'actions',
  title: 'Actions',
  description: `Use DialogActions to add actions to the
[Dialog](/components/dialog). Actions must be Mineral
[Buttons](/components/button) and are automatically styled to be minimal
except for the last, which will be primary. This behavior can be overridden with
props on the Button children.`,
  scope: {
    Button,
    DemoLayout,
    Dialog,
    DialogActions,
    DialogHeader,
    DialogTitle
  },
  source: `
    <DemoLayout>
      <Dialog>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
        </DialogHeader>
        <DialogActions>
          <Button size="medium">Cancel</Button>
          <Button size="medium">Action</Button>
        </DialogActions>
      </Dialog>
    </DemoLayout>`
};

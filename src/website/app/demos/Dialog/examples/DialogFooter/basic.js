/* @flow */
import Button from '../../../../../../library/Button';
import {
  DialogActions,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../../../../../../library/Dialog';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `DialogFooter is used to add an extension to a
[Dialog](/components/dialog). It can contain any children, but is best used with
[DialogActions](/components/dialog-actions)`,
  scope: {
    Button,
    DemoLayout,
    Dialog,
    DialogActions,
    DialogFooter,
    DialogHeader,
    DialogTitle
  },
  source: `
    <DemoLayout>
      <Dialog>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogActions>
            <Button size="medium">Cancel</Button>
            <Button size="medium">Action</Button>
          </DialogActions>
        </DialogFooter>
      </Dialog>
    </DemoLayout>`
};

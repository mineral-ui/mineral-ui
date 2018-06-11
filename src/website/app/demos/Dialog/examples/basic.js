/* @flow */
import Button from '../../../../../library/Button';
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../../../../../library/Dialog';
import DemoLayout from '../components/DemoLayout';
import Dialog from '../components/DemoDialog';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `TODO`,
  scope: {
    Button,
    DemoLayout,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    DialogTitle
  },
  source: `
    <DemoLayout>
      <Dialog>
        <DialogHeader>
          <DialogTitle>
            Lorem ipsum dolor sit amet
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </DialogBody>
        <DialogFooter>
          <Button minimal size="medium">Cancel</Button>
          <Button primary size="medium">Action</Button>
        </DialogFooter>
      </Dialog>
    </DemoLayout>`
};

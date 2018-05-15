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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Viverra nam libero justo laoreet sit amet. Vitae sapien
            pellentesque habitant morbi tristique. Posuere lorem ipsum dolor
            sit. Vel risus commodo viverra maecenas accumsan. Id cursus
            metus aliquam eleifend mi in nulla posuere sollicitudin. Lectus
            mauris ultrices eros in cursus turpis. Natoque penatibus et
            magnis dis. Eget aliquet nibh praesent tristique magna sit amet.
            Pellentesque elit eget gravida cum sociis natoque penatibus.
            Luctus accumsan tortor posuere ac ut consequat semper viverra.
            Sed vulputate odio ut enim. Vivamus at augue eget arcu.
          </p>
        </DialogBody>
        <DialogFooter>
          <Button minimal size="medium">Cancel</Button>
          <Button primary size="medium">Action</Button>
        </DialogFooter>
      </Dialog>
    </DemoLayout>`
};

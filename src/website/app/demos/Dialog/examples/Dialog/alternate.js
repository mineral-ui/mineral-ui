/* @flow */
import Button from '../../../../../../library/Button';
import {
  DialogActions,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../../../../../../library/Dialog';
import Text from '../../../../../../library/Text';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'alternate',
  title: 'Alternate Syntax',
  description: `Dialogs can contain any children, but are best used
with [DialogHeader](/components/dialog-header),
[DialogBody](/components/dialog-body), [DialogFooter](/components/dialog-footer),
[DialogTitle](/components/dialog-title), and
[DialogActions](/components/dialog-actions).

<Callout title="Note">
  <p key={0}>
    If DialogBody is not explicitly defined, all content not wrapped by
    DialogHeader or DialogFooter will be automatically wrapped by DialogBody.
    If DialogBody is defined, content not wrapped by DialogHeader or
    DialogFooter will be ignored.
  </p>
  <p key={1}>
    Additionally, Dialog props, such as <code key={0}>title</code> or
    <code key={1}>actions</code>, will take precedence over children.
  </p>
</Callout>`,
  scope: {
    Button,
    DemoLayout,
    Dialog,
    DialogActions,
    DialogBody,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    Text
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
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </DialogBody>
        <DialogFooter>
          <DialogActions>
            <Button size="medium">Cancel</Button>
            <Button size="medium">Action</Button>
          </DialogActions>
        </DialogFooter>
      </Dialog>
    </DemoLayout>`
};

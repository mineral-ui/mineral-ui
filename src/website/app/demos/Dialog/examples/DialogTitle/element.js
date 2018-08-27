/* @flow */
import { DialogHeader, DialogTitle } from '../../../../../../library/Dialog';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'element-appearance',
  title: 'Element & Appearance',
  description: `Apply the appropriate semantic meaning & styles the \`element\`
and \`appearance\` props. See [Text](/components/text/#headings) for more details.`,
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
          <DialogTitle element='h3' appearance="h1">
            This title is an h3 that looks like a level 1 heading
          </DialogTitle>
        </DialogHeader>
      </Dialog>
    </DemoLayout>
  `
};

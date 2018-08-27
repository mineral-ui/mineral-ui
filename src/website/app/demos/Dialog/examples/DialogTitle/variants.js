/* @flow */
import { DialogHeader, DialogTitle } from '../../../../../../library/Dialog';
import capitalize from '../../../../utils/capitalize';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'variants',
  title: 'Variants',
  description: `Use the \`variant\` prop to help
[communicate intent](/color#guidelines-variants).

  <Callout title="Note">
    <p key={0}>
      <code key={0}>variant</code> is automatically supplied to the title if the
      prop is passed to the Dialog root;
      see <a href="/components/dialog/#variants" key={1}>Dialog Variants</a>.
    </p>
  </Callout>`,
  scope: {
    capitalize,
    DemoLayout,
    Dialog,
    DialogHeader,
    DialogTitle
  },
  source: `() => {
    return ['success', 'warning', 'danger'].map(variant => {
      return (
        <DemoLayout key={variant}>
          <Dialog>
            <DialogHeader>
              <DialogTitle variant={variant}>
                {capitalize(variant) + ' ipsum dolor sit amet'}
              </DialogTitle>
            </DialogHeader>
          </Dialog>
        </DemoLayout>
      )
    })
  }`
};

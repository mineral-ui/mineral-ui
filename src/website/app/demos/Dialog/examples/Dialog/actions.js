/* @flow */
import { FormField } from '../../../../../../library/Form';
import TextInput from '../../../../../../library/TextInput';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'actions',
  title: 'Actions',
  description: `Dialog's \`actions\` prop accepts an array of objects to
configure the rendered [Buttons](/components/button). Each object contains the
text of the Button as well as any props to apply to that Button.`,
  scope: {
    DemoLayout,
    Dialog,
    FormField,
    TextInput
  },
  source: `
    <DemoLayout>
      <Dialog
        title="Lorem ipsum dolor sit amet"
        actions={[
          { text: 'Cancel' },
          { text: 'Continue', variant: 'success', disabled: true }
        ]}>
        <FormField label="Lorem ipsum" input={TextInput} required />
      </Dialog>
    </DemoLayout>`
};

/* @flow */
import DemoLayout from '../../components/DemoLayout';
import TextInput from '../../../../../../library/TextInput';
import FormField from '../../../../../../library/Form/FormField';

export default {
  id: 'variants',
  title: 'Variants',
  description: `FormField is available in a few variants, mostly for use with
[validation](#validation). Be sure to use the
[appropriate variant](/color#guidelines-variants) for your intent.`,
  scope: { DemoLayout, FormField, TextInput },
  source: `
    <DemoLayout>
      <FormField
        input={TextInput}
        label="Success"
        caption="This is help text"
        variant="success" />
      <FormField
        input={TextInput}
        label="Warning"
        caption="This is help text"
        variant="warning" />
      <FormField
        input={TextInput}
        label="Danger"
        caption="This is help text"
        variant="danger" />
    </DemoLayout>
  `
};

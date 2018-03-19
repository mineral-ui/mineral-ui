/* @flow */
import { CheckboxGroup } from '../../../../../../library/Checkbox';
import { FormField } from '../../../../../../library/Form';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'form-field',
  title: 'FormField',
  description: `Use a [FormField](/components/form-field) to provide an accessible label
and other features as well as a more streamlined API.

_Note: The \`invalid\` and \`required\` props are not automatically forwarded
to Checkboxes because doing so might not do what the author expects (marking
**all** Checkboxes as invalid or required).  These props can, however, be set
using the \`data\` prop._`,
  scope: { CheckboxGroup, DemoForm, FormField },
  source: `
    <DemoForm>
      <FormField
        input={CheckboxGroup}
        label="What are the primary characteristics of a mineral?"
        caption="Hint: All of the above"
        name="contact"
        variant="success"
        required
        data={[
          { label: 'Naturally occurring', value: 'natural' },
          { label: 'Inorganic', value: 'inorganic' },
          { label: 'Solid', value: 'solid' },
          { label: 'Definite chemical composition', value: 'composition' },
          { label: 'Crystalline structure', value: 'crystalline' }
        ]} />
    </DemoForm>
  `
};

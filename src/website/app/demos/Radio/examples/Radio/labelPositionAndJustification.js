/* @flow */
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../library/Radio';
import { FormFieldDivider } from '../../../../../../library/Form';

export default {
  id: 'label-position-and-justification',
  title: 'Label Position & Justification',
  description: `Use the \`labelPosition\` prop to adjust the position of the
control relative to the label. Use the \`justify\` prop to maximize the space
between the label and the control.  These props are often useful when used in
tandem with one another.`,
  scope: { DemoForm, FormFieldDivider, Radio },
  source: `
    <DemoForm>
      <Radio name="mineral" label="Quartz" value="quartz" />
      <FormFieldDivider />
      <Radio name="mineral" label="Magnetite" value="magnetite" labelPosition="start" />
      <FormFieldDivider />
      <Radio name="mineral" label="Azurite" value="azurite" justify />
      <FormFieldDivider />
      <Radio name="mineral" label="Hematite" value="hematite" labelPosition="start" justify />
    </DemoForm>
  `
};

/* @flow */
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../library/Checkbox';
import { FormFieldDivider } from '../../../../../../library/Form';

export default {
  id: 'label-position-and-justification',
  title: 'Label Position & Justification',
  description: `Use the \`labelPosition\` prop to adjust the position of the
control relative to the label. Use the \`justify\` prop to maximize the space
between the label and the control.  These props are often useful when used in
tandem with one another.`,
  scope: { Checkbox, DemoForm, FormFieldDivider },
  source: `
    <DemoForm>
      <Checkbox name="minerals" label="Quartz" value="quartz" />
      <FormFieldDivider />
      <Checkbox name="minerals" label="Magnetite" value="magnetite" labelPosition="start" />
      <FormFieldDivider />
      <Checkbox name="minerals" label="Azurite" value="azurite" justify />
      <FormFieldDivider />
      <Checkbox name="minerals" label="Hematite" value="hematite" labelPosition="start" justify />
    </DemoForm>
  `
};

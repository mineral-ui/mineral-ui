/* @flow */
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../library/Checkbox';
import { FormFieldDivider } from '../../../../../../library/Form';

export default {
  id: 'justify',
  title: 'Justify',
  description: `Use the \`justify\` prop to maximize the space between the label
and the control. This prop is often useful when used in conjunction with the
\`labelPosition\` prop.`,
  scope: { Checkbox, DemoForm, FormFieldDivider },
  source: `
    <DemoForm>
      <Checkbox name="minerals" label="Quartz" value="quartz" justify />
      <FormFieldDivider />
      <Checkbox name="minerals" label="Magnetite" value="magnetite" justify labelPosition="start" />
    </DemoForm>
  `
};

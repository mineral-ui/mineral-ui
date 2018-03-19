/* @flow */
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../library/Radio';
import { FormFieldDivider } from '../../../../../../library/Form';

export default {
  id: 'justify',
  title: 'Justify',
  description: `Use the \`justify\` prop to maximize the space between the label
and the control. This prop is often useful when used in conjunction with the
\`labelPosition\` prop.`,
  scope: { DemoForm, FormFieldDivider, Radio },
  source: `
    <DemoForm>
      <Radio name="mineral" label="Quartz" value="quartz" justify />
      <FormFieldDivider />
      <Radio name="mineral" label="Magnetite" value="magnetite" justify labelPosition="start" />
    </DemoForm>
  `
};

/* @flow */
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../library/Radio';

export default {
  id: 'required',
  title: 'Required',
  description: `The \`required\` prop on a Radio does nothing visually on its
own, but is important for accessibility.`,
  scope: { DemoForm, Radio },
  source: `
    <DemoForm>
      <Radio name="mineral" label="Quartz" value="quartz" required defaultChecked />
      <Radio name="mineral" label="Magnetite" value="magnetite" required />
    </DemoForm>
  `
};

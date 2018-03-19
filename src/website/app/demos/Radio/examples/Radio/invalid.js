/* @flow */
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../library/Radio';

export default {
  id: 'invalid',
  title: 'Invalid',
  description: `The \`invalid\` prop on a Radio does nothing visually on its
own, but is important for accessibility.`,
  scope: { DemoForm, Radio },
  source: `
    <DemoForm>
      <Radio name="mineral" label="Quartz" value="quartz" defaultChecked invalid />
      <Radio name="mineral" label="Magnetite" value="magnetite" invalid />
    </DemoForm>
  `
};

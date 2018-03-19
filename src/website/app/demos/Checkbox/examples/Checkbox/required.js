/* @flow */
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../library/Checkbox';

export default {
  id: 'required',
  title: 'Required',
  description: `The \`required\` prop on a Checkbox does nothing visually on its
own, but is important for accessibility.`,
  scope: { DemoForm, Checkbox },
  source: `
    <DemoForm>
      <Checkbox name="minerals" label="Quartz" value="quartz" required defaultChecked />
      <Checkbox name="minerals" label="Magnetite" value="magnetite" required />
    </DemoForm>
  `
};

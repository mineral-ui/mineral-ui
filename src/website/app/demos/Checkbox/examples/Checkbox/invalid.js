/* @flow */
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../library/Checkbox';

export default {
  id: 'invalid',
  title: 'Invalid',
  description: `The \`invalid\` prop on a Checkbox does nothing visually on its
own, but is important for accessibility.`,
  scope: { DemoForm, Checkbox },
  source: `
    <DemoForm>
      <Checkbox name="minerals" label="Quartz" value="quartz" defaultChecked invalid />
      <Checkbox name="minerals" label="Magnetite" value="magnetite" invalid />
    </DemoForm>
  `
};

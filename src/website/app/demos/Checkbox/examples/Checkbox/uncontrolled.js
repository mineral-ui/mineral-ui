/* @flow */
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../library/Checkbox';

export default {
  id: 'uncontrolled',
  title: 'Uncontrolled',
  description: `Uncontrolled Checkboxes behave just like their HTML input
counterparts wherein the checked state is handled by the DOM.  The only
difference is that \`defaultChecked\` must be used to set the initial state
rather than \`checked\`.`,
  scope: { DemoForm, Checkbox },
  source: `
    <DemoForm>
      <Checkbox name="minerals" label="Quartz" value="quartz" defaultChecked />
      <Checkbox name="minerals" label="Magnetite" value="magnetite" />
    </DemoForm>
  `
};

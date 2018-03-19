/* @flow */
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../library/Radio';

export default {
  id: 'uncontrolled',
  title: 'Uncontrolled',
  description: `Uncontrolled Radios behave just like their HTML input
counterparts wherein the checked state is handled by the DOM.  The only
difference is that \`defaultChecked\` must be used to set the initial state
rather than \`checked\`.`,
  scope: { DemoForm, Radio },
  source: `
    <DemoForm>
      <Radio name="mineral" label="Quartz" value="quartz" defaultChecked />
      <Radio name="mineral" label="Magnetite" value="magnetite" />
    </DemoForm>
  `
};

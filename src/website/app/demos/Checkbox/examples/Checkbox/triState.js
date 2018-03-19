/* @flow */
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../library/Checkbox';

export default {
  id: 'tri-state',
  title: 'Tri-state',
  description: `Checkbox supports three different states, namely unchecked,
checked, and indeterminate.`,
  scope: { DemoForm, Checkbox },
  source: `
    <DemoForm>
      <Checkbox name="states" label="Unchecked" value="unchecked" />
      <Checkbox name="states" label="Checked" value="checked" defaultChecked />
      <Checkbox name="states" label="Indeterminate" value="indeterminate" defaultChecked indeterminate />
    </DemoForm>
  `
};

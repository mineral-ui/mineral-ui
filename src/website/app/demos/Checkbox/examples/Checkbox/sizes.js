/* @flow */
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../library/Checkbox';

export default {
  id: 'sizes',
  title: 'Sizes',
  description: `Checkbox is available in a few sizes.`,
  scope: { DemoForm, Checkbox },
  source: `
    <DemoForm>
      <Checkbox name="size" label="Small" value="small" size="small" />
      <Checkbox name="size" label="Medium" value="medium" size="medium" />
      <Checkbox name="size" label="Large" value="large" defaultChecked />
      <Checkbox name="size" label="Jumbo" value="jumbo" size="jumbo" />
    </DemoForm>
  `
};

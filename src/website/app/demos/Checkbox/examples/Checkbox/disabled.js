/* @flow */
import Checkbox from '../../../../../../library/Checkbox';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `Use the disabled prop to indicate that the Checkbox is not
available for interaction.`,
  scope: { DemoForm, Checkbox },
  source: `
    <DemoForm>
      <Checkbox label="Quartz" value="quartz" disabled />
      <Checkbox label="Magnetite" value="magnetite" defaultChecked disabled />
    </DemoForm>
  `
};

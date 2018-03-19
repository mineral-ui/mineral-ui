/* @flow */
import Radio from '../../../../../../library/Radio';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `Use the disabled prop to indicate that the Radio is not
available for interaction.`,
  scope: { DemoForm, Radio },
  source: `
    <DemoForm>
      <Radio label="Quartz" value="quartz" disabled />
      <Radio label="Magnetite" value="magnetite" defaultChecked disabled />
    </DemoForm>
  `
};

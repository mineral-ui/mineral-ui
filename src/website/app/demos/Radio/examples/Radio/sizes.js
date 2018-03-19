/* @flow */
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../library/Radio';

export default {
  id: 'sizes',
  title: 'Sizes',
  description: `Radio is available in a few sizes.`,
  scope: { DemoForm, Radio },
  source: `
    <DemoForm>
      <Radio name="size" label="Small" value="small" size="small" />
      <Radio name="size" label="Medium" value="medium" size="medium" />
      <Radio name="size" label="Large" value="large" defaultChecked />
      <Radio name="size" label="Jumbo" value="jumbo" size="jumbo" />
    </DemoForm>
  `
};

/* @flow */
import { RadioGroup } from '../../../../../../library/Radio';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'uncontrolled',
  title: 'Uncontrolled',
  description: `Create an uncontrolled RadioGroup by using the
\`defaultChecked\` prop rather than the \`checked\` prop.`,
  scope: { DemoForm, RadioGroup },
  source: `
    <DemoForm>
      <RadioGroup
        name="mineral"
        defaultChecked="quartz"
        data={[
          { label: 'Fluorite', value: 'fluorite' },
          { label: 'Magnetite', value: 'magnetite' },
          { label: 'Quartz', value: 'quartz' }
        ]} />
    </DemoForm>
  `
};

/* @flow */
import { CheckboxGroup } from '../../../../../../library/Checkbox';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'uncontrolled',
  title: 'Uncontrolled',
  description: `Create an uncontrolled CheckboxGroup by using the
\`defaultChecked\` prop rather than the \`checked\` prop.`,
  scope: { CheckboxGroup, DemoForm },
  source: `
    <DemoForm>
      <CheckboxGroup
        name="minerals"
        defaultChecked={['magnetite', 'quartz']}
        data={[
          { label: 'Fluorite', value: 'fluorite' },
          { label: 'Magnetite', value: 'magnetite' },
          { label: 'Quartz', value: 'quartz' }
        ]} />
    </DemoForm>
  `
};

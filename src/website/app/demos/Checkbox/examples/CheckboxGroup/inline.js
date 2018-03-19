/* @flow */
import { CheckboxGroup } from '../../../../../../library/Checkbox';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'inline',
  title: 'Inline',
  description: `Use the \`inline\` prop to display choices inline horizontally
rather than stacked vertically.`,
  scope: { CheckboxGroup, DemoForm },
  source: `
    <DemoForm>
      <CheckboxGroup
        inline
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

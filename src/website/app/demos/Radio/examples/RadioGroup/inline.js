/* @flow */
import { RadioGroup } from '../../../../../../library/Radio';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'inline',
  title: 'Inline',
  description: `Use the \`inline\` prop to display choices inline horizontally
rather than stacked vertically.`,
  scope: { DemoForm, RadioGroup },
  source: `
    <DemoForm>
      <RadioGroup
        inline
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

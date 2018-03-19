/* @flow */
import Radio, { RadioGroup } from '../../../../../../library/Radio';
import { FormFieldDivider } from '../../../../../../library/Form';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'data-vs-children',
  title: 'Data vs. Children',
  description: `Use either the \`data\` prop or \`children\` to construct a
group of related controls.`,
  scope: { DemoForm, FormFieldDivider, RadioGroup, Radio },
  source: `
    <DemoForm>
      <RadioGroup
        name="mineral-1"
        defaultChecked="quartz"
        data={[
          { label: 'Fluorite', value: 'fluorite' },
          { label: 'Magnetite', value: 'magnetite' },
          { label: 'Quartz', value: 'quartz' }
        ]} />

      <FormFieldDivider />

      <RadioGroup name="mineral-2" defaultChecked="pyrite">
        <Radio label="Azurite" value="azurite" />
        <Radio label="Hematite" value="hematite" />
        <Radio label="Pyrite" value="pyrite" />
      </RadioGroup>
    </DemoForm>
  `
};

/* @flow */
import Checkbox, { CheckboxGroup } from '../../../../../../library/Checkbox';
import { FormFieldDivider } from '../../../../../../library/Form';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'data-vs-children',
  title: 'Data vs. Children',
  description: `Use either the \`data\` prop or \`children\` to construct a
group of related controls.`,
  scope: { Checkbox, CheckboxGroup, DemoForm, FormFieldDivider },
  source: `
    <DemoForm>
      <CheckboxGroup
        name="minerals-1"
        defaultChecked={['magnetite', 'quartz']}
        data={[
          { label: 'Fluorite', value: 'fluorite' },
          { label: 'Magnetite', value: 'magnetite' },
          { label: 'Quartz', value: 'quartz' }
        ]} />

      <FormFieldDivider />

      <CheckboxGroup name="minerals-2" defaultChecked={['hematite', 'pyrite']}>
        <Checkbox label="Azurite" value="azurite" />
        <Checkbox label="Hematite" value="hematite" />
        <Checkbox label="Pyrite" value="pyrite" />
      </CheckboxGroup>
    </DemoForm>
  `
};

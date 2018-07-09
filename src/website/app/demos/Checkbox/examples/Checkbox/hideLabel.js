/* @flow */
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../library/Checkbox';

export default {
  id: 'hide-label',
  title: 'Visually Hidden Label',
  description: `If the purpose of a Checkbox is obvious from context and adding
a label would negatively affect the design, you can use \`hideLabel\` to
visually hide the label while retaining accessibility.`,
  scope: { DemoForm, Checkbox },
  source: `
    <DemoForm>
      <Checkbox label="Select All" hideLabel />
    </DemoForm>
  `
};

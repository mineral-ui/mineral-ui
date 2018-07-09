/* @flow */
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../library/Radio';

export default {
  id: 'hide-label',
  title: 'Visually Hidden Label',
  description: `If the purpose of a Radio is obvious from context and adding
a label would negatively affect the design, you can use \`hideLabel\` to
visually hide the label while retaining accessibility.`,
  scope: { DemoForm, Radio },
  source: `
    <DemoForm>
      <Radio label="Select All" hideLabel />
    </DemoForm>
  `
};

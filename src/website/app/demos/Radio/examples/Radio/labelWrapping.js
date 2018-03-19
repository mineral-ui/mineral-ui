/* @flow */
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../library/Radio';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare velit nec dui molestie posuere. Nulla facilisi. Nulla tempor turpis vel aliquam viverra. In eu sagittis elit. Integer scelerisque purus nulla, sit amet dictum ipsum elementum finibus. Suspendisse et erat nisl. Sed aliquet finibus odio, ut volutpat metus dictum sed. Nullam nunc mi, consequat sit amet magna ut, faucibus placerat tortor. Duis porttitor tellus vitae condimentum convallis.`;

export default {
  id: 'label-wrapping',
  title: 'Label Wrapping',
  description: `This example demonstrates how the text of a long label will wrap
in relation to the position of the control.`,
  scope: { DemoForm, loremIpsum, Radio },
  source: `
    <DemoForm>
      <Radio name="example" label={loremIpsum} defaultChecked />
    </DemoForm>
  `
};

/* @flow */
import TextArea from '../../../../../library/TextArea';

export default {
  id: 'uncontrolled',
  title: 'Uncontrolled',
  description: `Uncontrolled TextAreas behave just like HTML textarea elements.
The value is handled by the DOM.  The only difference is that \`defaultValue\`
must be used to set the initial value rather than \`value\`.`,
  scope: { TextArea },
  source: `
    <TextArea defaultValue="Hello World" />
  `
};

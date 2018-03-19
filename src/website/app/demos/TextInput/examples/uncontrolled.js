/* @flow */
import TextInput from '../../../../../library/TextInput/';

export default {
  id: 'uncontrolled',
  title: 'Uncontrolled',
  description: `Uncontrolled TextInputs behave just like HTML input elements.
The value is handled by the DOM.  The only difference is that \`defaultValue\`
must be used to set the initial value rather than \`value\`.`,
  scope: { TextInput },
  source: `
    <TextInput defaultValue="Hello World" />
  `
};

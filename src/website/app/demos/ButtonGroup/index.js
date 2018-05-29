/* @flow */
import { componentTheme } from '../../../../library/ButtonGroup/ButtonGroup';
import examples from './examples';
import bestPractices from './bestPractices';

const doc = require('!!react-docgen-loader!../../../../library/ButtonGroup/ButtonGroup');

export default [
  {
    bestPractices,
    componentTheme,
    doc,
    examples,
    slug: 'button-group',
    title: 'ButtonGroup',
    whenHowToUse: `ButtonGroup allows users to stylistically group related
buttons or to select either a single or multiple options from a group of related
buttons.

Although ButtonGroups can mimic radio-button and checkbox behaviors, the
elements do not behave as their HTML counterparts during traditional form
submission and thus should not be used as replacements for radios and checkboxes
if that functionality is needed. In such scenarios, [Radio](/components/radio)
or [Checkbox](/components/checkbox) should be used instead.
`
  }
];

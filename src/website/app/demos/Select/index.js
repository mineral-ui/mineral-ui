/* @flow */
import { componentTheme } from '../../../../library/Select/Select';
import examples from './examples';
import bestPractices from './bestPractices';
const doc = require('!!react-docgen-loader!../../../../library/Select/Select');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'select',
  title: 'Select',
  whenHowToUse: `Select boxes are best used in forms to allow users to choose
from a set of 4 to 9 options, where using a [RadioGroup](/components/radio-group) would
take up too much space.

Select can be used with more than 9 options when the entire set is well
known to the user. When the user may not know all the options in the set,
consider allowing the user to type in the option they want.

With fewer than 4 options, consider using a
[RadioGroup](/components/radio-group) instead so that users can see all the options at
once.

Don’t use Select to present the user with a list of actions.
Use a [Dropdown](/components/dropdown) instead.`
};

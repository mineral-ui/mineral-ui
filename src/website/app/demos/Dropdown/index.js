/* @flow */
import { componentTheme } from '../../../../library/Dropdown/Dropdown';
import examples from './examples';
import bestPractices from './bestPractices';
const doc = require('!!react-docgen-loader!../../../../library/Dropdown/Dropdown');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'dropdown',
  title: 'Dropdown',
  whenHowToUse: `Dropdowns can change their available MenuItems depending on the state of your app.
You can remove options that don't make sense in the current context, or show them as \`disabled\` if certain conditions need to be met.

Use Dropdown for extra functionality, not for primary actions, since the options are hidden from the user until interaction.
Ensure that option labeling clearly describes the action the user can take.`
};

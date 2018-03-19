/* @flow */
import { componentTheme } from '../../../../library/Button/Button';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/Button/Button');

export default {
  bestPractices,
  doc,
  examples,
  slug: 'button',
  componentTheme,
  title: 'Button',
  whenHowToUse: `A Button should be used whenever you need to trigger an action in your app.
Buttons should have concise labeling indicating to your user what will happen when the Button is clicked.
The color of the button should be chosen according to the intent of the action.

For example, if clicking a Button will make a potentially destructive action, use \`variant="danger"\` instead of \`"success"\`.`
};

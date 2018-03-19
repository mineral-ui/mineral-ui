/* @flow */
import { componentTheme } from '../../../../library/Icon/Icon';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/Icon/Icon');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'icon',
  title: 'Icon',
  whenHowToUse: `Icons can symbolize actions and objects in your interface.
Use icons in combination with labels to help users more quickly process your UI.

Don't use too many icons or you run the risk of creating visual clutter.

Icons are usually used inside of a [Button](/components/button) to reinforce the action.
If used alone, Icon placement should be very clear. For example, a play icon ► could be used instead of writing out the word "Play".

Icons should only be used if they aid communication, not merely for decoration.`
};

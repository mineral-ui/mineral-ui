/* @flow */
import { componentTheme } from '../../../../library/Tooltip/Tooltip';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/Tooltip/Tooltip');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'tooltip',
  title: 'Tooltip',
  whenHowToUse: `
Use Tooltips to provide contextual annotations to user controls.
Tooltip content should be concise and helpful. Content should also be static.
Users don't expect the contents to change and are unlikely to notice changes
since they are hidden.

Tooltips are not predictable interactions for mobile device users and should be avoided.

Use a [Popover](/components/popover) instead of a Tooltip when users need to interact with the content. For example, walkthroughs and dismissable new feature announcements should be built with Popovers.
`
};

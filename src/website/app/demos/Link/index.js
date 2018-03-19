/* @flow */
import { componentTheme } from '../../../../library/Link/Link';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/Link/Link');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'link',
  title: 'Link',
  whenHowToUse: `Links should be used when the browser location will change.
Links should be clear about where the user will navigate.
Avoid using "click here" or similar for Link content.

If you need a minimally styled Button, use \`<Button minimal>Example</Button>\`.`
};

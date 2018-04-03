/* @flow */
import { componentTheme } from '../../../../library/Text/Text';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/Text/Text');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'text',
  title: 'Text',
  whenHowToUse: `Use Text when displaying text-based content, particularly
headings or content that wraps to multiple lines, in your app to ensure proper
font sizes, colors, weights, and spacing relative to other components.

The semantic meaning of your content should inform the \`element\` prop.`
};

/* @flow */
import { componentTheme } from '../../../../library/Avatar/Avatar';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/Avatar/Avatar');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'avatar',
  title: 'Avatar',
  whenHowToUse: `Avatar should be used to associate something to an identity.
For example, add a user's Avatar to a [Card](/components/card) to connect that Card's
content to that user.`
};

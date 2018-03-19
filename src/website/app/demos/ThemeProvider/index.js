/* @flow */
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/themes/ThemeProvider');

export default {
  bestPractices,
  doc,
  examples,
  slug: 'theme-provider',
  title: 'ThemeProvider',
  whenHowToUse: `Wrap your app in a ThemeProvider in order for styles to be properly applied.
    Additionally, it can be nested deeper in your component hierarchy to theme portions of your app.`
};

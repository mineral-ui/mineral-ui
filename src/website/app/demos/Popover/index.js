/* @flow */
import { componentTheme } from '../../../../library/Popover/Popover';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/Popover/Popover');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'popover',
  title: 'Popover',
  whenHowToUse: `Popovers contain content providing clarification for other interface elements.
Since popovers are usually triggered with deliberate user actions, they can contain more complex information than a tooltip which appears upon hovering/focusing an element.

- Keep content short. Don't put so much content that the tooltip requires a scrollbar.
- Popovers can be used to implement other custom behaviors or widgets such as color pickers, or other task-specific custom inputs.
- Popovers could be chained together in application logic to create walkthroughs for onboarding.
`
};

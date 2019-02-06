/**
 * @jest-environment node
 */
/* @flow */
import navItemExamples from '../../../website/app/demos/Navigation/NavItem/examples';
import primaryNavExamples from '../../../website/app/demos/Navigation/PrimaryNav/examples';
import secondaryNavExamples from '../../../website/app/demos/Navigation/SecondaryNav/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

const examples = [
  ...navItemExamples,
  ...primaryNavExamples,
  ...secondaryNavExamples
];

describe('Navigation', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

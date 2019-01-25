/**
 * @jest-environment node
 */
/* @flow */
import menuExamples from '../../../website/app/demos/Menu/Menu/examples';
import menuDividerExamples from '../../../website/app/demos/Menu/MenuDivider/examples';
import menuGroupExamples from '../../../website/app/demos/Menu/MenuGroup/examples';
import menuItemExamples from '../../../website/app/demos/Menu/MenuItem/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

const examples = [
  ...menuExamples,
  ...menuDividerExamples,
  ...menuGroupExamples,
  ...menuItemExamples
];

describe('Menu', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

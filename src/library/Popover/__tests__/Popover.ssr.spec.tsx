/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Popover/Popover/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Popover', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

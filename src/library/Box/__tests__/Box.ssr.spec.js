/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Box/Box/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Box', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

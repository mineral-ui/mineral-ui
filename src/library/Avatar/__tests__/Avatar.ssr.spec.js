/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Avatar/Avatar/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Avatar', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

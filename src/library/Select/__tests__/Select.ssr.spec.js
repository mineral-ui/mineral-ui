/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Select/Select/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Select', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Button/Button/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Button', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

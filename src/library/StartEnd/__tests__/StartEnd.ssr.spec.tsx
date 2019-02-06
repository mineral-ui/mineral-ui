/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/StartEnd/StartEnd/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('StartEnd', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

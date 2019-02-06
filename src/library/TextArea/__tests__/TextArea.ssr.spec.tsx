/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/TextArea/TextArea/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('TextArea', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

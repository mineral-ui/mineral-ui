/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/TextInput/TextInput/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('TextInput', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

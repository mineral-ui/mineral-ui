/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Text/Text/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Text', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

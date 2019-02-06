/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Table/Table/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Table', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

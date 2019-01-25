/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Tooltip/Tooltip/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Tooltip', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

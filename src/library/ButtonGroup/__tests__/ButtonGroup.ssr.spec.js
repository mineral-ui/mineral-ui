/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/ButtonGroup/ButtonGroup/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('ButtonGroup', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

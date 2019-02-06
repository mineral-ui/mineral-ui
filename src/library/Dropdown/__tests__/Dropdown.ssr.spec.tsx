/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Dropdown/Dropdown/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Dropdown', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

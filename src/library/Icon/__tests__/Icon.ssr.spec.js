/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Icon/Icon/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Icon', () => {
  testDemoExamples(examples, {
    exclude: ['categories'],
    mode: 'ssr'
  });
});

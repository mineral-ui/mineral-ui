/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Pagination/Pagination/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Pagination', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

/**
 * @jest-environment node
 */
/* @flow */
import examples from '../../../website/app/demos/Link/Link/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

describe('Link', () => {
  testDemoExamples(examples, {
    exclude: ['other'],
    mode: 'ssr'
  });
});

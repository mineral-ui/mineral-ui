/**
 * @jest-environment node
 */
/* @flow */
import radioExamples from '../../../website/app/demos/Radio/Radio/examples';
import radioGroupExamples from '../../../website/app/demos/Radio/RadioGroup/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

const examples = [...radioExamples, ...radioGroupExamples];

describe('Radio', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

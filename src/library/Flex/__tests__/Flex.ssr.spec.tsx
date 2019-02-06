/**
 * @jest-environment node
 */
/* @flow */
import flexExamples from '../../../website/app/demos/Flex/Flex/examples';
import flexItemExamples from '../../../website/app/demos/Flex/FlexItem/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

const examples = [...flexExamples, ...flexItemExamples];

describe('Flex', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

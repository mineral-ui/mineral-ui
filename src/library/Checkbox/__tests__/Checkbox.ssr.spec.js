/**
 * @jest-environment node
 */
/* @flow */
import checkboxExamples from '../../../website/app/demos/Checkbox/Checkbox/examples';
import checkboxGroupExamples from '../../../website/app/demos/Checkbox/CheckboxGroup/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

const examples = [...checkboxExamples, ...checkboxGroupExamples];

describe('Checkbox', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

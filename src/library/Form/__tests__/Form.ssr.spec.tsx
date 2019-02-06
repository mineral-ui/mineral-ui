/**
 * @jest-environment node
 */
/* @flow */
import formFieldExamples from '../../../website/app/demos/Form/FormField/examples';
import formFieldDividerExamples from '../../../website/app/demos/Form/FormFieldDivider/examples';
import formFieldsetExamples from '../../../website/app/demos/Form/FormFieldset/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

const examples = [
  ...formFieldExamples,
  ...formFieldDividerExamples,
  ...formFieldsetExamples
];

describe('Form', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

/**
 * @jest-environment node
 */
/* @flow */
import tabExamples from '../../../website/app/demos/Tabs/Tab/examples';
import tabsExamples from '../../../website/app/demos/Tabs/Tabs/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

const examples = [...tabExamples, ...tabsExamples];

describe('Tabs', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

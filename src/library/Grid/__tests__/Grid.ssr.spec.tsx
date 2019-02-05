/**
 * @jest-environment node
 */
/* @flow */
import gridExamples from '../../../website/app/demos/Grid/Grid/examples';
import gridItemExamples from '../../../website/app/demos/Grid/GridItem/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

const examples = [...gridExamples, ...gridItemExamples];

describe('Grid', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

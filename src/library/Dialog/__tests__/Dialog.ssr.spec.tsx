/**
 * @jest-environment node
 */
/* @flow */
import dialogExamples from '../../../website/app/demos/Dialog/Dialog/examples';
import dialogActionsExamples from '../../../website/app/demos/Dialog/DialogActions/examples';
import dialogBodyExamples from '../../../website/app/demos/Dialog/DialogBody/examples';
import dialogFooterExamples from '../../../website/app/demos/Dialog/DialogFooter/examples';
import dialogHeaderExamples from '../../../website/app/demos/Dialog/DialogHeader/examples';
import dialogTitleExamples from '../../../website/app/demos/Dialog/DialogTitle/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

const examples = [
  ...dialogExamples,
  ...dialogActionsExamples,
  ...dialogBodyExamples,
  ...dialogFooterExamples,
  ...dialogHeaderExamples,
  ...dialogTitleExamples
];

describe('Dialog', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

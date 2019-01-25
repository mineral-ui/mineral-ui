/**
 * @jest-environment node
 */
/* @flow */
import cardExamples from '../../../website/app/demos/Card/Card/examples';
import cardActionsExamples from '../../../website/app/demos/Card/CardActions/examples';
import cardBlockExamples from '../../../website/app/demos/Card/CardBlock/examples';
import cardDividerExamples from '../../../website/app/demos/Card/CardDivider/examples';
import cardFooterExamples from '../../../website/app/demos/Card/CardFooter/examples';
import cardImageExamples from '../../../website/app/demos/Card/CardImage/examples';
import cardStatusExamples from '../../../website/app/demos/Card/CardStatus/examples';
import cardTitleExamples from '../../../website/app/demos/Card/CardTitle/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

const examples = [
  ...cardExamples,
  ...cardActionsExamples,
  ...cardBlockExamples,
  ...cardDividerExamples,
  ...cardFooterExamples,
  ...cardImageExamples,
  ...cardStatusExamples,
  ...cardTitleExamples
];

describe('Card', () => {
  testDemoExamples(examples, {
    mode: 'ssr'
  });
});

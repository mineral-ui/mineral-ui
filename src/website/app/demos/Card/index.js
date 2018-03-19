/* @flow */
import { componentTheme as cardComponentTheme } from '../../../../library/Card/Card';
import { componentTheme as cardActionsComponentTheme } from '../../../../library/Card/CardActions';
import { componentTheme as cardBlockComponentTheme } from '../../../../library/Card/CardBlock';
import { componentTheme as cardDividerComponentTheme } from '../../../../library/Card/CardDivider';
import { componentTheme as cardFooterComponentTheme } from '../../../../library/Card/CardFooter';
import { componentTheme as cardStatusComponentTheme } from '../../../../library/Card/CardStatus';
import { componentTheme as cardTitleComponentTheme } from '../../../../library/Card/CardTitle';

import cardExamples from './examples/Card';
import cardActionsExamples from './examples/CardActions';
import cardBlockExamples from './examples/CardBlock';
import cardDividerExamples from './examples/CardDivider';
import cardFooterExamples from './examples/CardFooter';
import cardImageExamples from './examples/CardImage';
import cardStatusExamples from './examples/CardStatus';
import cardTitleExamples from './examples/CardTitle';

const cardDoc = require('!!react-docgen-loader!../../../../library/Card/Card');
const cardActionsDoc = require('!!react-docgen-loader!../../../../library/Card/CardActions');
const cardBlockDoc = require('!!react-docgen-loader!../../../../library/Card/CardBlock');
const cardDividerDoc = require('!!react-docgen-loader!../../../../library/Card/CardDivider');
const cardFooterDoc = require('!!react-docgen-loader!../../../../library/Card/CardFooter');
const cardImageDoc = require('!!react-docgen-loader!../../../../library/Card/CardImage');
const cardStatusDoc = require('!!react-docgen-loader!../../../../library/Card/CardStatus');
const cardTitleDoc = require('!!react-docgen-loader!../../../../library/Card/CardTitle');

import bestPractices from './bestPractices';

export default [
  {
    bestPractices: bestPractices.card,
    componentTheme: cardComponentTheme,
    doc: cardDoc,
    examples: cardExamples,
    slug: 'card',
    title: 'Card',
    whenHowToUse: `Cards are used when you need to group different kinds of elements with actions attached.
Cards are used to contain content of variable length that might not fit neatly into a table row or grid cell.
They're often used to show a collection of related but different types of information.

Don't put too much information in a single card.
Cards represent a gateway to more detailed information in another app view.`
  },
  {
    bestPractices: bestPractices.cardActions,
    componentTheme: cardActionsComponentTheme,
    doc: cardActionsDoc,
    examples: cardActionsExamples,
    slug: 'card-actions',
    title: 'CardActions',
    whenHowToUse: `CardActions is best used when Cards have 2–3 associated
actions, which may or may not be the same for each Card in the set.`
  },
  {
    bestPractices: bestPractices.cardBlock,
    componentTheme: cardBlockComponentTheme,
    doc: cardBlockDoc,
    examples: cardBlockExamples,
    slug: 'card-block',
    title: 'CardBlock',
    whenHowToUse: `CardBlock is used to help lay out content that's not a
[title](/components/card-title) or an [image](/components/card-image) in the body of the
[Card](/components/card).

Try not to put inline links in your content. Create purposeful calls to action
with [Buttons](/components/button) using [CardActions](/components/card-actions).`
  },
  {
    bestPractices: bestPractices.cardDivider,
    componentTheme: cardDividerComponentTheme,
    doc: cardDividerDoc,
    examples: cardDividerExamples,
    slug: 'card-divider',
    title: 'CardDivider',
    whenHowToUse: `CardDivider is used to provide visual separation between
sections of a [Card](/components/card) with complex content. It should be used sparingly.`
  },
  {
    bestPractices: bestPractices.cardFooter,
    componentTheme: cardFooterComponentTheme,
    doc: cardFooterDoc,
    examples: cardFooterExamples,
    slug: 'card-footer',
    title: 'CardFooter',
    whenHowToUse: `Use CardFooter to add a visually differentiated section to
your [Card](/components/card). It is best used for stateful information or functionality,
particularly when paired with a [\`variant\`](#variants). CardFooter must always
be the last thing in a Card.`
  },
  {
    bestPractices: bestPractices.cardImage,
    doc: cardImageDoc,
    examples: cardImageExamples,
    slug: 'card-image',
    title: 'CardImage',
    whenHowToUse: `CardImage is used when you want to reinforce the intent of the Card.
Images shouldn't be used alone in a Card, but should be paired with a call to action and/or a [CardTitle](/components/card-title).

If you are putting text over top of the CardImage, use a solid color or an image with sufficient contrast to the text.`
  },
  {
    bestPractices: bestPractices.cardStatus,
    componentTheme: cardStatusComponentTheme,
    doc: cardStatusDoc,
    examples: cardStatusExamples,
    slug: 'card-status',
    title: 'CardStatus',
    whenHowToUse: `CardStatus is used to display a Card's current status. If
the status information is not likely to change, use [CardTitle's](/components/card-title)
\`secondaryText\` or \`subtitle\` prop, instead.`
  },
  {
    bestPractices: bestPractices.cardTitle,
    componentTheme: cardTitleComponentTheme,
    doc: cardTitleDoc,
    examples: cardTitleExamples,
    slug: 'card-title',
    title: 'CardTitle',
    whenHowToUse: `Use a CardTitle when you need a consistently styled headings for your [Card](/components/card).
Use a subtitle to provide supporting information for the data displayed in the Card.`
  }
];

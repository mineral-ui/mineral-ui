/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import { componentTheme as cardComponentTheme } from '../../../../Card/Card';
import { componentTheme as cardBlockComponentTheme } from '../../../../Card/CardBlock';
import { componentTheme as cardTitleComponentTheme } from '../../../../Card/CardTitle';
import cardExamples from './examples/card';
import cardBlockExamples from './examples/card-block';
import cardImageExamples from './examples/card-image';
import cardTitleExamples from './examples/card-title';

const cardDoc = require('!!react-docgen-loader!../../../../Card/Card');
const cardBlockDoc = require('!!react-docgen-loader!../../../../Card/CardBlock');
const cardImageDoc = require('!!react-docgen-loader!../../../../Card/CardImage');
const cardTitleDoc = require('!!react-docgen-loader!../../../../Card/CardTitle');

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
    bestPractices: bestPractices.cardBlock,
    componentTheme: cardBlockComponentTheme,
    doc: cardBlockDoc,
    examples: cardBlockExamples,
    slug: 'card-block',
    title: 'CardBlock',
    whenHowToUse: `CardBlock is used to help lay out content that's not a [title](../card-title) or an [image](../card-image) in the body of the [Card](../card).

Try not to put inline links in your content. Create purposeful calls to action with [Buttons](../button) at the bottom of the Card.`
  },
  {
    bestPractices: bestPractices.cardImage,
    doc: cardImageDoc,
    examples: cardImageExamples,
    slug: 'card-image',
    title: 'CardImage',
    whenHowToUse: `CardImage is used when you want to reinforce the intent of the Card.
Images shouldn't be used alone in a Card, but should be paired with a call to action and/or a [CardTitle](../card-title).

If you are putting text over top of the CardImage, use a solid color or an image with sufficient contrast to the text.`
  },
  {
    bestPractices: bestPractices.cardTitle,
    componentTheme: cardTitleComponentTheme,
    doc: cardTitleDoc,
    examples: cardTitleExamples,
    slug: 'card-title',
    title: 'CardTitle',
    whenHowToUse: `Use a CardTitle when you need a consistently styled headings for your [Card](../card).
Use a subtitle to provide supporting information for the data displayed in the Card.`
  }
];

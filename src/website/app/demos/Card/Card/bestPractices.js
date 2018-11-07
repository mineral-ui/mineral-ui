/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../../library/styles';
import { mineralTheme } from '../../../../../library/themes';
import Card, {
  CardBlock,
  CardImage,
  CardTitle
} from '../../../../../library/Card';
import loremIpsum from '../common/loremIpsum';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const CardList = createStyledComponent('div', ({ theme }) => ({
  '& > div': {
    marginBottom: theme.space_stack_sm
  }
}));

const backgroundColor = mineralTheme.color_gray_10;

const bestPractices: BestPractices = [
  {
    type: 'do',
    backgroundColor,
    description: `Use a Card when you have different kinds of related content
representing one data object.`,
    example: (
      <Card>
        <CardImage src="/images/500x281.png" alt="gradient placeholder" />
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    )
  },
  {
    type: 'do',
    backgroundColor,
    description: `Use the [CardTitle](/components/card-title) component to add titles
to your Cards. Your Card titles and subtitles should use "Title Case".`,
    example: (
      <Card>
        <CardTitle subtitle="Card Subtitle">Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    )
  },
  {
    type: 'dont',
    backgroundColor,
    description: `Don't use custom heading elements. Regular \`<h1>\`,
\`<h2>\`, etc. will not be formatted automatically. Use a
[CardTitle](/components/card-title) instead.`,
    example: (
      <Card>
        <h1>Heading Element</h1>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    )
  },
  {
    type: 'dont',
    backgroundColor,
    description: `Don't forget to use a [CardBlock](/components/card-block). Content
placed into a Card outside the CardBlock will not have formatting or spacing
applied.`,
    example: (
      <Card>
        <CardTitle>Card Title</CardTitle>
        <p>{loremIpsum}</p>
        <img
          src="/images/200x200.png"
          alt="gradient placeholder"
          style={{ maxWidth: '100%' }}
        />
      </Card>
    )
  },
  {
    type: 'dont',
    backgroundColor,
    description: `Don't use regular \`<img />\` tags directly inside a Card,
which will result in unformatted content. Use [CardImage](/components/card-image)
instead.`,
    example: (
      <Card>
        <img src="/images/125x125.png" alt="gradient placeholder" />
        <img src="/images/125x125.png" alt="gradient placeholder" />
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    )
  },
  {
    type: 'dont',
    backgroundColor,
    description: `Don't use Cards when list items would do. Using a list for
single pieces of information is a more efficent design.`,
    example: (
      <CardList>
        <Card>
          <CardTitle>Friedrich Mohs</CardTitle>
        </Card>
        <Card>
          <CardTitle>Marie Tharp</CardTitle>
        </Card>
        <Card>
          <CardTitle>Alfred Wegener</CardTitle>
        </Card>
      </CardList>
    )
  }
];

export default bestPractices;

/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import { mineralTheme } from '../../../../library/themes';
import Button from '../../../../library/Button';
import Card, {
  CardActions,
  CardBlock,
  CardDivider,
  CardFooter,
  CardImage,
  CardStatus,
  CardTitle,
  CardTitleMenu
} from '../../../../library/Card';
import _Link from '../../../../library/Link';
import loremIpsum from './components/loremIpsum';

import type { Items } from '../../../../library/Menu/Menu';

const CardList = createStyledComponent('div', ({ theme }) => ({
  '& > div': {
    marginBottom: theme.space_stack_sm
  }
}));

const actionMenuData: Items = [
  { text: 'Rename' },
  { text: 'Copy' },
  { divider: true },
  { text: 'Delete', variant: 'danger' }
];

const Link = (props) => <_Link {...props} target="_blank" />;

const backgroundColor = mineralTheme.color_gray_10;

export default {
  card: [
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
  ],
  cardActions: [
    {
      type: 'do',
      backgroundColor,
      description:
        'Place the primary action on the right (left for `rtl` languages).',
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardActions>
            <Button minimal>Secondary Action</Button>
            <Button primary>Primary Action</Button>
          </CardActions>
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      description: `Don't use CardActions with a single, obvious action. Use
[Card's \`onClick\` prop](/components/card#clickable) instead.`,
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardActions>
            <Button primary>Obvious Action</Button>
          </CardActions>
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      description: `Don't place too many actions in CardActions. If you must
have more than 2–3 actions, use [icon-only Buttons](/components/button#icon-only).`,
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardActions>
            <Button minimal>Extra Action</Button>
            <Button minimal>Tertiary Action</Button>
            <Button minimal>Secondary Action</Button>
            <Button primary>Primary Action</Button>
          </CardActions>
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      description: `Don't mix [Buttons](/components/button) and [Links](/components/link) in
CardActions. Doing so is confusing for the user.`,
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardActions>
            <Link href="https://example.com">Link</Link>
            <Button primary>Button</Button>
          </CardActions>
        </Card>
      )
    }
  ],
  cardBlock: [
    {
      type: 'dont',
      backgroundColor,
      description: `Don't use CardBlock outside of [Card](/components/card), for which it
was designed.`,
      example: <CardBlock>{loremIpsum}</CardBlock>
    }
  ],
  cardDivider: [
    {
      type: 'dont',
      backgroundColor,
      description: `Don't use CardDivider to separate [CardTitle](/components/card-title)
from other content.`,
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardDivider />
          <CardBlock>{loremIpsum}</CardBlock>
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      description: `Don't use CardDivider between every section of
[Card](/components/card) content, which makes the Card unnecessarily busy. Dividers are
best used when the Card contains complex content that would be hard to discern
without the visual separation.`,
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardImage src="/images/690x690.png" alt="gradient placeholder" />
          <CardDivider />
          <CardBlock>{loremIpsum}</CardBlock>
          <CardDivider />
          <CardActions>
            <Button minimal>Secondary Action</Button>
            <Button primary>Primary Action</Button>
          </CardActions>
        </Card>
      )
    }
  ],
  cardImage: [
    {
      type: 'do',
      backgroundColor,
      description: `Use the CardImage component with an \`alt\` attribute, to
provide an adequate experience for all users.`,
      example: (
        <Card>
          <CardImage src="/images/690x690.png" alt="gradient placeholder" />
          <CardTitle>Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
        </Card>
      )
    }
  ],
  cardFooter: [
    {
      type: 'do',
      backgroundColor,
      description: `Use "Title Case" for your footer title.`,
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardFooter title="Card Footer Title" />
        </Card>
      )
    },
    {
      type: 'do',
      backgroundColor,
      description: `Use the [appropriate variant](/color#guidelines-variants)
for your intent.`,
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardFooter title="Ready" variant="success" />
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      description: `Don't use a variant that differs from intent, as this will
cause confusion.`,
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardFooter title="Available" variant="danger" />
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      description: `Don't put too much in a CardFooter, even if it's expandable.
CardFooter content should be as brief as possible.`,
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardFooter title="Card Footer Title">
            <CardBlock>{loremIpsum}</CardBlock>
            <CardImage src="/images/500x281.png" alt="gradient placeholder" />
            <CardActions>
              <Button minimal>Secondary Action</Button>
              <Button primary>Primary Action</Button>
            </CardActions>
          </CardFooter>
        </Card>
      )
    }
  ],
  cardStatus: [
    {
      type: 'do',
      backgroundColor,
      description: `Use the [appropriate variant](/color#guidelines-variants)
for your intent.`,
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardStatus variant="success">Available</CardStatus>
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      description: `Don't use a variant that differs from intent, as this will
cause confusion.`,
      example: (
        <Card>
          <CardTitle>Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
          <CardStatus variant="danger">99.999% Uptime</CardStatus>
        </Card>
      )
    }
  ],
  cardTitle: [
    {
      type: 'do',
      backgroundColor,
      description: `Use "Title Case" within Card titles and subtitles.`,
      example: (
        <Card>
          <CardTitle subtitle="Subtitle Here">Title Here</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
        </Card>
      )
    },
    {
      type: 'do',
      backgroundColor,
      description: `Use \`secondaryText\` for brief information that doesn't
belong to every Card in a set. If information is in every Card in the set, or
if the \`secondaryText\` information is not brief, consider using the
\`subtitle\` prop instead.`,
      example: (
        <Card>
          <CardTitle secondaryText="12 Kb">Card Title</CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
        </Card>
      )
    },
    {
      type: 'do',
      backgroundColor,
      description: `Use \`actions\` to provide non-primary actions for a Card.
If you need to provide 2–3 primary actions, use [CardActions](/components/card-actions).`,
      example: (
        <Card>
          <CardTitle actions={<CardTitleMenu data={actionMenuData} />}>
            Card Title
          </CardTitle>
          <CardBlock>{loremIpsum}</CardBlock>
        </Card>
      )
    },
    {
      type: 'dont',
      backgroundColor,
      description: `Don't use CardTitle outside of [Card](/components/card), for which it
was designed.`,
      example: <CardTitle>Out of Place Title</CardTitle>
    }
  ]
};

/* @flow */
import React from 'react';
import { mineralTheme } from '../../../../../library/themes';
import Button from '../../../../../library/Button';
import _Link from '../../../../../library/Link';
import Card, {
  CardActions,
  CardBlock,
  CardTitle
} from '../../../../../library/Card';
import loremIpsum from '../common/loremIpsum';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const backgroundColor = mineralTheme.color_gray_10;
const Link = (props) => <_Link {...props} target="_blank" />;

const bestPractices: BestPractices = [
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
];

export default bestPractices;

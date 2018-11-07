/* @flow */
import React from 'react';
import { mineralTheme } from '../../../../../library/themes';
import Button from '../../../../../library/Button';
import Card, {
  CardActions,
  CardBlock,
  CardDivider,
  CardImage,
  CardTitle
} from '../../../../../library/Card';
import loremIpsum from '../common/loremIpsum';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const backgroundColor = mineralTheme.color_gray_10;

const bestPractices: BestPractices = [
  {
    type: 'dont',
    backgroundColor,
    description: `Don't use CardDivider to separate
[CardTitle](/components/card-title) from other content.`,
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
  [Card](/components/card) content, which makes the Card unnecessarily busy.
Dividers are best used when the Card contains complex content that would be hard
to discern without the visual separation.`,
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
];

export default bestPractices;

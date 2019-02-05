/* @flow */
import React from 'react';
import { mineralTheme } from '../../../../../library/themes';
import Button from '../../../../../library/Button';
import Card, {
  CardActions,
  CardBlock,
  CardFooter,
  CardImage,
  CardTitle
} from '../../../../../library/Card';
import loremIpsum from '../common/loremIpsum';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const backgroundColor = mineralTheme.color_gray_10;

const bestPractices: BestPractices = [
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
];

export default bestPractices;

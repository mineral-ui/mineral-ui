/* @flow */
import React from 'react';
import { mineralTheme } from '../../../../../library/themes';
import Card, {
  CardBlock,
  CardStatus,
  CardTitle
} from '../../../../../library/Card';
import loremIpsum from '../common/loremIpsum';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const backgroundColor = mineralTheme.color_gray_10;

const bestPractices: BestPractices = [
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
];

export default bestPractices;

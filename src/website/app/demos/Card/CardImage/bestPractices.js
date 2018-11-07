/* @flow */
import React from 'react';
import { mineralTheme } from '../../../../../library/themes';
import Card, {
  CardBlock,
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
];

export default bestPractices;

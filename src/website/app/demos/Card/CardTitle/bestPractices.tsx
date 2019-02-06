/* @flow */
import React from 'react';
import { mineralTheme } from '../../../../../library/themes';
import Card, {
  CardBlock,
  CardTitle,
  CardTitleMenu
} from '../../../../../library/Card';
import loremIpsum from '../common/loremIpsum';

import type { MenuItems } from '../../../../../library/Menu/types';
import type { BestPractices } from '../../../pages/ComponentDoc/types';

const backgroundColor = mineralTheme.color_gray_10;

const actionMenuData: MenuItems = [
  { text: 'Rename' },
  { text: 'Copy' },
  { divider: true },
  { text: 'Delete', variant: 'danger' }
];

const bestPractices: BestPractices = [
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
];

export default bestPractices;

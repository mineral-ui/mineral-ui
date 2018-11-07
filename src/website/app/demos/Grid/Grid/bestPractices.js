/* @flow */
import React from 'react';
import { css } from 'react-emotion';
import { mineralTheme } from '../../../../../library/themes';
import Grid, { GridItem } from '../../../../../library/Grid';
import Button from '../../../../../library/Button';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const bestPractices: BestPractices = [
  {
    type: 'do',
    description: `Use Grid and [GridItem](/components/grid-item) to align
components to a columnar layout.`,
    example: (
      <Grid>
        <GridItem>
          <Button size="small" fullWidth>
            Cut
          </Button>
        </GridItem>
        <GridItem>
          <Button size="small" fullWidth>
            Copy
          </Button>
        </GridItem>
        <GridItem>
          <Button size="small" fullWidth>
            Paste
          </Button>
        </GridItem>
      </Grid>
    )
  },
  {
    type: 'dont',
    description: `Don't use Grid if the content being laid out should _not_
[respond to language direction](#rtl).`,
    example: (
      <Grid height={200}>
        <GridItem
          span={3}
          padding="sm"
          className={css({ backgroundColor: mineralTheme.color_theme_20 })}>
          Sidebar
        </GridItem>
        <GridItem
          padding="sm"
          className={css({ backgroundColor: mineralTheme.color_theme_10 })}>
          Main Content
        </GridItem>
      </Grid>
    )
  }
];

export default bestPractices;

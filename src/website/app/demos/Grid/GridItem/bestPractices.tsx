/* @flow */
import React from 'react';
import Grid, { GridItem } from '../../../../../library/Grid';
import Link from '../../../../../library/Link';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const bestPractices: BestPractices = [
  {
    type: 'do',
    description: `Use GridItem within [Grid](/components/grid) to align
components to a columnar layout.`,
    example: (
      <Grid>
        <GridItem>
          <Link href="https://example.com">Products</Link>
        </GridItem>
        <GridItem>
          <Link href="https://example.com">About</Link>
        </GridItem>
        <GridItem>
          <Link href="https://example.com">Contact</Link>
        </GridItem>
      </Grid>
    )
  },
  {
    type: 'dont',
    description: `Don't display content directly inside GridItem. Wrap
GridItem around components instead.`,
    example: (
      <Grid>
        <GridItem>1: Shipping Info</GridItem>
        <GridItem>2: Billing Info</GridItem>
        <GridItem>3: Confirm Order</GridItem>
      </Grid>
    )
  }
];

export default bestPractices;

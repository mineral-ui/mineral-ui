/* @flow */
import React from 'react';
import Flex, { FlexItem } from '../../../../../library/Flex';
import Button from '../../../../../library/Button';
import Link from '../../../../../library/Link';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const bestPractices: BestPractices = [
  {
    type: 'do',
    description: `Use FlexItem within [Flex](/components/flex) to align components
relative to one another.`,
    example: (
      <Flex justifyContent="end">
        <FlexItem>
          <Link href="https://example.com">Products</Link>
        </FlexItem>
        <FlexItem>
          <Link href="https://example.com">About</Link>
        </FlexItem>
        <FlexItem>
          <Link href="https://example.com">Contact</Link>
        </FlexItem>
      </Flex>
    )
  },
  {
    type: 'dont',
    description: `Don't use FlexItem within [Flex](/components/flex) to align
components to a columnar layout. Use [GridItem](/components/grid-item) within
[Grid](/components/grid), instead.`,
    example: (
      <Flex>
        <FlexItem grow={1}>
          <Button size="small" fullWidth>
            Cut
          </Button>
        </FlexItem>
        <FlexItem grow={1}>
          <Button size="small" fullWidth>
            Copy
          </Button>
        </FlexItem>
        <FlexItem grow={1}>
          <Button size="small" fullWidth>
            Paste
          </Button>
        </FlexItem>
      </Flex>
    )
  },
  {
    type: 'dont',
    description: `Don't display content directly inside FlexItem. Wrap
FlexItem around components instead.`,
    example: (
      <Flex>
        <FlexItem>1: Shipping Info</FlexItem>
        <FlexItem>2: Billing Info</FlexItem>
        <FlexItem>3: Confirm Order</FlexItem>
      </Flex>
    )
  }
];

export default bestPractices;

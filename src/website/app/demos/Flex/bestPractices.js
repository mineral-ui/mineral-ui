/* @flow */
import React from 'react';
import { css } from 'react-emotion';
import { mineralTheme } from '../../../../library/themes';
import Flex, { FlexItem } from '../../../../library/Flex';
import Button from '../../../../library/Button';
import Link from '../../../../library/Link';

export default {
  flex: [
    {
      type: 'do',
      description: `Use Flex and [FlexItem](/components/flex-item) to arrange
components next to one another, with a consistent gutter.`,
      example: (
        <Flex justifyContent="end">
          <FlexItem>
            <Button size="small">Cut</Button>
          </FlexItem>
          <FlexItem>
            <Button size="small">Copy</Button>
          </FlexItem>
          <FlexItem>
            <Button size="small">Paste</Button>
          </FlexItem>
        </Flex>
      )
    },
    {
      type: 'dont',
      description: `Don't use Flex and [FlexItem](/components/flex-item) to
align components to a columnar layout. Use [Grid](/components/grid) and
[GridItem](/components/grid-item), instead.`,
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
      description: `Don't use Flex to align content to the left & right.
[StartEnd](/components/start-end) is a more appropriate choice.`,
      example: (
        <Flex justifyContent="between">
          <FlexItem>
            <Button minimal>Cancel</Button>
          </FlexItem>
          <FlexItem>
            <Button primary variant="success">
              Save
            </Button>
          </FlexItem>
        </Flex>
      )
    },
    {
      type: 'dont',
      description: `Don't use Flex if the content being laid out should _not_
[respond to language direction](#rtl).`,
      example: (
        <Flex height={200}>
          <FlexItem
            width={50}
            padding="sm"
            className={css({ backgroundColor: mineralTheme.color_theme_20 })}>
            Sidebar
          </FlexItem>
          <FlexItem
            grow={1}
            padding="sm"
            className={css({ backgroundColor: mineralTheme.color_theme_10 })}>
            Main Content
          </FlexItem>
        </Flex>
      )
    }
  ],
  flexItem: [
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
  ]
};

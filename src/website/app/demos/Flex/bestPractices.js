/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { mineralTheme } from '../../../../themes';
import Flex, { FlexItem } from '../../../../Flex';
import Button from '../../../../Button';
import Link from '../../../../Link';

export default {
  flex: [
    {
      type: 'do',
      description: `Use Flex and [FlexItem](../flex-item) to arrange components
next to one another, with a consistent gutter.`,
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
      description: `Don't use Flex to align content to the left & right.
[StartEnd](../start-end) is a more appropriate choice.`,
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
        <Flex css={{ height: 200 }}>
          <FlexItem
            width={50}
            padding="sm"
            css={{ backgroundColor: mineralTheme.color_theme_20 }}>
            Sidebar
          </FlexItem>
          <FlexItem
            grow={1}
            padding="sm"
            css={{ backgroundColor: mineralTheme.color_theme_10 }}>
            Main Content
          </FlexItem>
        </Flex>
      )
    }
  ],
  flexItem: [
    {
      type: 'do',
      description: `Use FlexItem within [Flex](../flex) to align components
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

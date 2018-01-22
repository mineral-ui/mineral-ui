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
import { createStyledComponent, getResponsiveStyles } from '../styles';
import Box from '../Box';

type Props = {
  /** Align item along the cross axis [[Responsive-capable]](#responsive) */
  alignSelf?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | Array<'start' | 'end' | 'center' | 'stretch'>,
  /**
   * Media query (min-width) breakpoints along which to apply props marked
   * "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"
   */
  breakpoints?: Array<number | string>,
  /**
   * Grow factor along the main axis ([see example](#grow))
   * [[Responsive-capable]](#responsive)
   */
  grow?: number | Array<number>,
  /**
   * Shrink factor along the main axis ([see example](#shrink))
   * [[Responsive-capable]](#responsive)
   */
  shrink?: number | Array<number>
};

type Values = boolean | null | number | string;

const mapValueToProperty = (
  property: string,
  value: Values
): number | string => {
  const map = {
    alignSelf: value =>
      value === 'start' || value === 'end' ? `flex-${value}` : value,
    flexBasis: value =>
      typeof value === 'number' && value < 1 ? `${value * 100}%` : value,
    flexGrow: value => value,
    flexShrink: value => value
  };

  return map[property](value);
};

const styles = {
  root: ({ alignSelf, breakpoints, grow, shrink, theme, width }) => ({
    ...getResponsiveStyles({
      breakpoints,
      mapValueToProperty,
      styles: {
        alignSelf,
        flexBasis: width || 'auto',
        flexGrow: grow,
        flexShrink: shrink
      },
      theme
    })
  })
};

const Root = createStyledComponent(Box, styles.root, {
  displayName: 'FlexItem',
  filterProps: ['inline', 'width']
});

/**
 * FlexItem is used within [Flex](../flex) to lay out other components in
 * your app.
 */
const FlexItem = (props: Props) => <Root {...props} />;

FlexItem.defaultProps = {
  grow: 0,
  shrink: 1
};

export default FlexItem;

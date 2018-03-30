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
    | Array<'start' | 'end' | 'center' | 'stretch' | null>,
  /**
   * Media query (min-width) breakpoints along which to apply props marked
   * "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"
   */
  breakpoints?: Array<number | string>,
  /**
   * Grow factor along the main axis ([see example](#grow))
   * [[Responsive-capable]](#responsive)
   */
  grow?: number | Array<number | null>,
  /**
   * Shrink factor along the main axis ([see example](#shrink))
   * [[Responsive-capable]](#responsive)
   */
  shrink?: number | Array<number | null>
};

type Values = boolean | null | number | string;

const mapValueToProperty = (
  property: string,
  value: Values
): number | string => {
  const map = {
    alignSelf: (value) =>
      value === 'start' || value === 'end' ? `flex-${value}` : value,
    flexBasis: (value) =>
      typeof value === 'number' && value < 1 ? `${value * 100}%` : value,
    flexGrow: (value) => value,
    flexShrink: (value) => value
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
 * FlexItem is used within [Flex](/components/flex) to lay out other components in
 * your app.
 */
const FlexItem = (props: Props) => <Root {...props} />;

FlexItem.defaultProps = {
  grow: 0,
  shrink: 1
};

export default FlexItem;

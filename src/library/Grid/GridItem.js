/* @flow */
import React from 'react';
import { createStyledComponent, getResponsiveStyles } from '../styles';
import { FlexItem } from '../Flex';
import type { Values } from '../Flex/Flex';

type Props = {
  /** Number of columns spanned [[Responsive-capable]](#responsive) */
  span?: number | Array<number | null>
};

const getFlexGrow = (value: number): number => (value ? 0 : 1);
const getWidth = (
  value: number,
  columns: number,
  gutter: number | string
): number | string =>
  value ? `calc(${(value / columns) * 100}% - ${gutter})` : 0;

/*
 * [1] IE11 doesn't use the correct box-sizing model with the flex-basis
 *     property. The workaround is to set flex-basis to 'auto' and use 'width'
 *     instead.
 */
const styles = {
  root: ({ breakpoints, columns, gutterWidth, span, theme }) => {
    const gutter =
      typeof gutterWidth === 'number'
        ? `${gutterWidth}px`
        : theme[`space_inline_${gutterWidth}`] || gutterWidth;

    const mapValueToProperty = (
      property: string,
      value: Values
    ): number | string => {
      const map = {
        flexGrow: getFlexGrow,
        width: (value) => getWidth(value, columns, gutter)
      };

      return map[property](value);
    };

    return {
      flexBasis: 'auto', // [1]

      ...getResponsiveStyles({
        breakpoints,
        mapValueToProperty,
        styles: {
          flexGrow: span,
          width: span // [1]
        },
        theme
      })
    };
  }
};

const Root = createStyledComponent(FlexItem, styles.root, {
  displayName: 'GridItem',
  filterProps: ['alignSelf', 'grow', 'inline', 'width'],
  withProps: { shrink: 0 }
});

/**
 * GridItem is used within [Grid](/components/grid) to lay out other components
 * in your app.
 */
export default function GridItem(props: Props) {
  return <Root {...props} />;
}

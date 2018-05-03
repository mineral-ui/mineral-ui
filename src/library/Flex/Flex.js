/* @flow */
import React, { Children, cloneElement } from 'react';
import { withTheme } from '../themes';
import { createStyledComponent, getResponsiveStyles, pxToEm } from '../styles';
import Box from '../Box';

type Props = {
  /** Align items along the cross axis [[Responsive-capable]](#responsive) */
  alignItems?:
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
  /** Must be [FlexItem(s)](./flex-item). */
  children: React$Node,
  /**
   * Direction of flow of items along the main axis
   * [[Responsive-capable]](#responsive)
   */
  direction?:
    | 'column'
    | 'column-reverse'
    | 'row'
    | 'row-reverse'
    | Array<'column' | 'column-reverse' | 'row' | 'row-reverse' | null>,
  /** Size of gap between children */
  gutterWidth?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string,
  /** Align items along the main axis [[Responsive-capable]](#responsive) */
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'around'
    | 'between'
    | 'evenly'
    | Array<
        'start' | 'end' | 'center' | 'around' | 'between' | 'evenly' | null
      >,
  /**
   * Determines if items can wrap along main axis
   * [[Responsive-capable]](#responsive)
   */
  wrap?: boolean | Array<boolean | null>
};

export type Values = boolean | null | number | string;

const getAlignment = (value: string): string =>
  ['start', 'end'].indexOf(value) !== -1 ? `flex-${value}` : value;

const getGutterSize = (theme: Object, value: number | string): string =>
  typeof value === 'number'
    ? pxToEm(value / 2)
    : `${parseFloat(theme[`space_inline_${value}`] || value) / 2}em`;

const getMargin = (
  gutter: string,
  theme: Object,
  value: number | string
): string =>
  value ? `calc(${getMeasurement(theme, value)} - ${gutter})` : `-${gutter}`;

const getMeasurement = (theme: Object, value: number | string): string => {
  return (
    theme[`space_inline_${value}`] ||
    (typeof value === 'number' ? `${value}px` : value)
  );
};

const getJustification = (value: string): string =>
  ['around', 'between', 'evenly'].indexOf(value) !== -1
    ? `space-${value}`
    : getAlignment(value);

const styles = {
  root: ({
    breakpoints,
    alignItems,
    direction,
    gutterWidth,
    inline,
    margin,
    marginEnd,
    marginHorizontal,
    marginLeft: propMarginLeft,
    marginRight: propMarginRight,
    marginStart,
    justifyContent,
    theme,
    wrap
  }) => {
    const rtl = theme.direction === 'rtl';
    const gutter = getGutterSize(theme, gutterWidth);
    const marginLeft =
      propMarginLeft ||
      (rtl ? marginEnd : marginStart) ||
      marginHorizontal ||
      margin;
    const marginRight =
      propMarginRight ||
      (rtl ? marginStart : marginEnd) ||
      marginHorizontal ||
      margin;

    const mapValueToProperty = (
      property: string,
      value: Values
    ): number | string => {
      const map = {
        alignItems: getAlignment,
        display: (value) =>
          value === undefined || value === false ? 'flex' : 'inline-flex',
        flexDirection: (value) => value,
        flexWrap: (value) =>
          value ? 'wrap' : value === false ? 'nowrap' : value,
        marginLeft: (value) => getMargin(gutter, theme, value),
        marginRight: (value) => getMargin(gutter, theme, value),
        justifyContent: getJustification
      };

      return map[property](value);
    };

    return getResponsiveStyles({
      breakpoints,
      mapValueToProperty,
      styles: {
        alignItems,
        display: inline,
        flexDirection: direction,
        flexWrap: wrap,
        marginLeft,
        marginRight,
        justifyContent
      },
      theme
    });
  }
};

const Root = createStyledComponent(Box, styles.root, {
  displayName: 'Flex',
  filterProps: ['inline']
});

const ThemedRoot = withTheme(
  ({ breakpoints, children, gutterWidth, theme, ...restProps }) => {
    const rootProps = {
      breakpoints,
      gutterWidth,
      ...restProps
    };

    let flexItems;
    flexItems = Children.map(children, (child) => {
      const {
        breakpoints: propBreakpoints,
        margin: propMargin,
        marginHorizontal,
        marginLeft,
        marginRight
      } = child.props;
      let props = {
        breakpoints: propBreakpoints || breakpoints
      };

      if (gutterWidth) {
        const margin =
          marginHorizontal || propMargin || getGutterSize(theme, gutterWidth);
        props = {
          ...props,
          marginLeft: marginLeft || margin,
          marginRight: marginRight || margin
        };
      }
      return cloneElement(child, props);
    });

    return <Root {...rootProps}>{flexItems}</Root>;
  }
);

/**
 * Flex component is used together with [FlexItem](/components/flex-item) to lay out
 * other components in a flexible, and optionally responsive, manner.
 */
const Flex = (props: Props) => <ThemedRoot {...props} />;

Flex.defaultProps = {
  alignItems: 'stretch',
  direction: 'row',
  gutterWidth: 'md',
  justifyContent: 'start'
};

export default Flex;

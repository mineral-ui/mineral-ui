/* @flow */
import React, { Children, cloneElement } from 'react';
import { withTheme } from '../themes';
import { createStyledComponent, pxToEm } from '../styles';
import getResponsiveStyles, {
  getPrevNonNull
} from '../styles/getResponsiveStyles';
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

const getGutterSize = (
  theme: Object,
  value: number | string
): number | string =>
  typeof value === 'number' && value !== 0
    ? pxToEm(value)
    : theme[`space_inline_${value}`] || value;

const getIndexedValue = (property, index) =>
  property && Array.isArray(property) && index !== undefined
    ? property[index]
    : property;

const getJustification = (value: string): string =>
  ['around', 'between', 'evenly'].indexOf(value) !== -1
    ? `space-${value}`
    : getAlignment(value);

const getMarginOrGutter = ({
  gutterWidth,
  index,
  margin,
  marginEnd,
  marginHorizontal,
  marginStart,
  start,
  theme
}) => {
  return (
    getIndexedValue(start ? marginStart : marginEnd, index) ||
    getIndexedValue(marginHorizontal, index) ||
    getIndexedValue(margin, index) ||
    getGutterSize(theme, gutterWidth)
  );
};

const getMarginProps = ({ direction, gutterWidth, theme, ...restProps }) => {
  if (Array.isArray(direction)) {
    return direction.reduce(
      (acc, _, index) => {
        const value = getPrevNonNull(direction, index);

        if (value === 'row' || value === 'row-reverse') {
          pushMarginProps({
            direction: value,
            index,
            gutterWidth,
            props: acc,
            theme,
            ...restProps
          });
        } else {
          pushMarginProps({
            index,
            gutterWidth: 0,
            props: acc,
            theme,
            ...restProps
          });
        }
        return acc;
      },
      { marginStart: [], marginEnd: [] }
    );
  } else if (direction === 'row' || direction === 'row-reverse') {
    const flip = direction === 'row-reverse';
    const marginProperty = flip ? 'marginStart' : 'marginEnd';

    return {
      [marginProperty]: getMarginOrGutter({
        ...restProps,
        gutterWidth,
        start: flip,
        theme
      })
    };
  }
};

const pushMarginProps = ({
  direction,
  index,
  gutterWidth,
  props,
  theme,
  ...restProps
}) => {
  const flip = direction === 'row-reverse';
  props.marginEnd.push(
    getMarginOrGutter({
      ...restProps,
      gutterWidth: flip ? 0 : gutterWidth,
      index,
      theme
    })
  );
  props.marginStart.push(
    getMarginOrGutter({
      ...restProps,
      gutterWidth: flip ? gutterWidth : 0,
      index,
      start: true,
      theme
    })
  );
};

const styles = {
  root: ({
    breakpoints,
    alignItems,
    direction,
    inline,
    justifyContent,
    theme,
    wrap
  }) => {
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
  ({ breakpoints, children, direction, gutterWidth, theme, ...restProps }) => {
    const rootProps = {
      breakpoints,
      direction,
      gutterWidth,
      ...restProps
    };

    let flexItems;
    flexItems = Children.map(children, (child, index) => {
      if (child && child.props) {
        const { breakpoints: propBreakpoints, ...restChildProps } = child.props;
        let props = {
          breakpoints: propBreakpoints || breakpoints
        };

        const flexItemsCount = Children.count(children);
        if (gutterWidth && index < flexItemsCount - 1) {
          props = {
            ...props,
            ...getMarginProps({
              direction,
              gutterWidth,
              theme,
              ...restChildProps
            })
          };
        }
        return cloneElement(child, props);
      }
      return child;
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

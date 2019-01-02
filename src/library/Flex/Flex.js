/* @flow */
import React, { Children, cloneElement } from 'react';
import { pxToEm } from '../styles';
import { getPrevNonNull } from '../styles/getResponsiveStyles';
import { withTheme } from 'emotion-theming';
import {
  ALIGN_ITEMS,
  DIRECTION,
  GUTTER_WIDTH,
  JUSTIFY_CONTENT
} from './constants';
import { FlexRoot as Root } from './styled';

import { flexPropTypes } from './propTypes';
import type { FlexDefaultProps, FlexProps } from './types';

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

        if (value === DIRECTION.row || value === DIRECTION['row-reverse']) {
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
  } else if (
    direction === DIRECTION.row ||
    direction === DIRECTION['row-reverse']
  ) {
    const flip = direction === DIRECTION['row-reverse'];
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
  const flip = direction === DIRECTION['row-reverse'];
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

const Flex = (props: FlexProps): React$Element<*> => <ThemedRoot {...props} />;

Flex.displayName = 'Flex';
const defaultProps: FlexDefaultProps = {
  alignItems: ALIGN_ITEMS.stretch,
  direction: DIRECTION.row,
  gutterWidth: GUTTER_WIDTH.md,
  justifyContent: JUSTIFY_CONTENT.start
};
Flex.defaultProps = defaultProps;
Flex.propTypes = flexPropTypes;

export default Flex;

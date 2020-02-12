/* @flow */
import styled from '@emotion/styled';
import Box from '../Box';
import { getResponsiveStyles } from '../styles';

import type { StyleValue } from '../styles/types';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const getAlignment = (value: string): string =>
  ['start', 'end'].indexOf(value) !== -1 ? `flex-${value}` : value;

const getJustification = (value: string): string =>
  ['around', 'between', 'evenly'].indexOf(value) !== -1
    ? `space-${value}`
    : getAlignment(value);

const getWidthValue = (value) =>
  typeof value === 'number' && value < 1 && value !== 0
    ? `${value * 100}%`
    : value;

const flexMapValueToProperty = (
  property: string,
  value: StyleValue
): number | string => {
  const map = {
    alignItems: getAlignment,
    display: (value) =>
      value === undefined || value === false ? 'flex' : 'inline-flex',
    flexDirection: (value) => value,
    flexWrap: (value) => (value ? 'wrap' : value === false ? 'nowrap' : value),
    justifyContent: getJustification
  };

  return map[property](value);
};

export const FlexRoot: StyledComponent<{ [key: string]: any }> = styled(Box, {
  shouldForwardProp: (prop) =>
    ['direction', 'inline', 'wrap'].indexOf(prop) === -1
})(
  ({
    breakpoints,
    alignItems,
    direction,
    inline,
    justifyContent,
    theme,
    wrap
  }) =>
    getResponsiveStyles({
      breakpoints,
      mapValueToProperty: flexMapValueToProperty,
      styles: {
        alignItems,
        display: inline,
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent
      },
      theme
    })
);

const flexItemMapValueToProperty = (
  property: string,
  value: StyleValue
): number | string => {
  const map = {
    alignSelf: (value) =>
      value === 'start' || value === 'end' ? `flex-${value}` : value,
    flexBasis: getWidthValue,
    flexGrow: (value) => value,
    flexShrink: (value) => value,
    minWidth: getWidthValue
  };

  return map[property](value);
};

export const FlexItemRoot: StyledComponent<{ [key: string]: any }> = styled(
  Box,
  {
    shouldForwardProp: (prop) =>
      ['inline', 'minWidth', 'width'].indexOf(prop) === -1
  }
)(({ alignSelf, breakpoints, grow, minWidth, shrink, theme, width }) =>
  getResponsiveStyles({
    breakpoints,
    mapValueToProperty: flexItemMapValueToProperty,
    styles: {
      alignSelf,
      flexBasis: width || 'auto',
      flexGrow: grow,
      flexShrink: shrink,
      minWidth
    },
    theme
  })
);

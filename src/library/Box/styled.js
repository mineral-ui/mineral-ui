/* @flow */
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { componentStyleReset, getResponsiveStyles } from '../styles';
import { SPACING_TYPES } from './constants';

import type { SpacingStyles, SpacingValue } from './types';

const getMeasurement = (value: number | string) =>
  typeof value === 'number' && value < 1 && value !== 0
    ? `${value * 100}%`
    : value;

const getSpaceValue = (
  property: string,
  theme: Object,
  value: number | string
) =>
  theme[`space_${SPACING_TYPES[property]}_${value}`] || getMeasurement(value);

const getSpacingStyles = (
  property: string,
  restProps: Object,
  rtl: boolean
): SpacingStyles => {
  // prettier-ignore
  const spacingPropKeys = ['', 'Horizontal', 'Vertical', 'Start', 'End', 'Bottom', 'Left', 'Right', 'Top']
    .map(suffix => `${property}${suffix}`)
    .filter(key => restProps[key] !== undefined);

  const setStyles = (
    directions: Array<string>,
    key: string,
    styles: SpacingStyles
  ) => {
    directions.forEach((direction) => {
      styles[`${property}${direction}`] = restProps[key];
    });
  };

  return spacingPropKeys.reduce((acc, key) => {
    if (key === property) {
      setStyles(['Bottom', 'Left', 'Right', 'Top'], key, acc);
    } else if (key.indexOf('Horizontal') !== -1) {
      setStyles(['Left', 'Right'], key, acc);
    } else if (key.indexOf('Vertical') !== -1) {
      setStyles(['Bottom', 'Top'], key, acc);
    } else if (key.indexOf('Start') !== -1) {
      setStyles([`${rtl ? 'Right' : 'Left'}`], key, acc);
    } else if (key.indexOf('End') !== -1) {
      setStyles([`${rtl ? 'Left' : 'Right'}`], key, acc);
    } else {
      acc[key] = restProps[key];
    }
    return acc;
  }, {});
};

export const BoxRoot = styled('div', {
  shouldForwardProp: (prop) =>
    ['filter', 'height', 'width'].indexOf(prop) === -1 && isPropValid(prop)
})(({ background, backgroundColor, blur, border, borderBottom, borderLeft, borderRadius, borderRight, borderTop, boxShadow, cursor, filter, maxHeight, maxWidth, minHeight, minWidth, overflow, position, scrollable, zIndex, breakpoints, height, inline, theme, width, ...restProps }) => {
  const rtl = theme.direction === 'rtl';

  const mapValueToProperty = (
    property: string,
    value: SpacingValue
  ): number | string => {
    const map = {
      borderRadius: borderRadius => borderRadius,
      display: (value) => (value ? 'inline-block' : undefined),
      height: getMeasurement,
      width: getMeasurement,
      ...['margin', 'padding'].reduce((acc, property) => {
        Object.keys(getSpacingStyles(property, restProps, rtl)).forEach(
          (style) => {
            acc[style] = (value) => getSpaceValue(property, theme, value);
          }
        );
        return acc;
      }, {})
    };

    return map[property](value);
  };

  return {
    ...componentStyleReset(theme),
    ...getResponsiveStyles({
      breakpoints,
      mapValueToProperty,
      styles: {
        borderRadius,
        display: inline,
        height,
        ...getSpacingStyles('margin', restProps, rtl),
        ...getSpacingStyles('padding', restProps, rtl),
        width
      },
      theme
    }),

    /* TargetX Custom Styles */
    ...(background && { background }),
    ...(backgroundColor && { backgroundColor }),
    ...(blur && { filter: `blur(${blur}px)` }),
    ...(border && { border }),
    ...(borderBottom && { borderBottom }),
    ...(borderLeft && { borderLeft }),
    ...(borderRight && { borderRight }),
    ...(borderTop && { borderTop }),
    ...(boxShadow && { boxShadow }),
    ...(cursor && { cursor }),
    ...(filter && { filter }),
    ...(maxHeight && { maxHeight: getMeasurement(maxHeight) }),
    ...(maxWidth && { maxWidth: getMeasurement(maxWidth) }),
    ...(minHeight && { minHeight: getMeasurement(minHeight) }),
    ...(minWidth && { minWidth: getMeasurement(minWidth) }),
    ...(overflow && { overflow }),
    ...(position && { position }),
    ...(scrollable && { overflow: 'scroll' }),
    ...(zIndex && { zIndex })
  };
});

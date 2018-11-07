/* @flow */
import { createStyledComponent, getResponsiveStyles } from '../styles';
import { SPACING_TYPES } from './constants';

import type { CreateRootNode } from '../styles/types';
import type {
  BoxDefaultProps,
  BoxProps,
  SpacingStyles,
  SpacingValue
} from './types';

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

export const createBoxRootNode: CreateRootNode<BoxProps, BoxDefaultProps> = (
  props,
  defaultProps
) => {
  const { element = defaultProps.element } = props;

  return createStyledComponent(
    element,
    ({ breakpoints, height, inline, theme, width, ...restProps }) => {
      const rtl = theme.direction === 'rtl';

      const mapValueToProperty = (
        property: string,
        value: SpacingValue
      ): number | string => {
        const map = {
          display: (value) => (value ? 'inline-block' : 'block'),
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

      return getResponsiveStyles({
        breakpoints,
        mapValueToProperty,
        styles: {
          display: inline,
          height,
          ...getSpacingStyles('margin', restProps, rtl),
          ...getSpacingStyles('padding', restProps, rtl),
          width
        },
        theme
      });
    },
    {
      includeStyleReset: true,
      rootEl: element
    }
  );
};

/* @flow */
type Args = {
  breakpoints?: Breakpoints,
  mapValueToProperty?: MapValueToProperty,
  styles: MaybeArrayStyles,
  theme: Theme
};
type Breakpoints = Array<number | string>;
type MapValueToProperty = (string, Values) => Values;
type MaybeArrayStyles = {
  [string]: Array<Values> | Values
};
type MediaQueries = Array<string>;
type ResponsiveStyles =
  | {
      [string]: Styles
    }
  | Styles;
type Styles = {
  [string]: Values
};
type Theme = Object;
type Values = boolean | null | number | string;

/*
 * Converts an array of breakpoints (numbers and theme variable keys) to an
 * array of CSS media query strings.
 *
 * Input: [100, 200]
 *
 * Ouput: [
 *   '@media (min-width: 100px) and (max-width: 199px)',
 *   '@media (min-width: 200px)'
 * ]
 */
const getMediaQueries = (
  breakpoints: Breakpoints,
  theme: Theme
): MediaQueries => {
  let queries = [];

  const getQueryWidth = (value) =>
    typeof value === 'number'
      ? `${value}px`
      : theme[`breakpoint_${value}`] || value;

  for (let i = 0; i <= breakpoints.length; i++) {
    if (i === breakpoints.length) {
      queries.push(`@media (min-width: ${getQueryWidth(breakpoints[i - 1])})`);
    } else if (i > 0) {
      queries.push(
        `@media (min-width: ${getQueryWidth(
          breakpoints[i - 1]
        )}) and (max-width: ${parseInt(getQueryWidth(breakpoints[i])) - 1}px)`
      );
    }
  }

  return queries;
};

/*
 * Given array that can contain null values and an index, checks if array[index]
 * is null. If it is, then it returns the next-most-previous non-null value in
 * the array until it gets to array[0], which it returns regardless.
 */
export const getPrevNonNull = (
  values: Array<Values>,
  index: number
): Values => {
  const value = Array.isArray(values) && values[index];
  if (index > 0) {
    return value === null ? getPrevNonNull(values, index - 1) : value;
  } else {
    return value;
  }
};

/*
 * Returns an object of style properties and their values (as interpreted
 * through mapValueToProperty, if provided). If an index is provided, then each
 * style property is an array, and this will use array[index] as the value.
 */
const getStyles = (
  styleKeys: Array<string>,
  styles: MaybeArrayStyles,
  mapValueToProperty?: MapValueToProperty,
  index?: number
): Styles =>
  styleKeys.reduce((acc, property) => {
    const indexInUse = index || 0;
    const styleValue = styles[property];
    const actualValue = Array.isArray(styleValue)
      ? getPrevNonNull(styleValue, indexInUse)
      : styleValue;
    acc[property] = mapValueToProperty
      ? mapValueToProperty(property, actualValue)
      : actualValue;

    return acc;
  }, {});

/*
 * Helper to potentially disperse an object of style properties (whole values
 * can be an array) across a provided (optional) array of breakpoints, which is
 * converted to an object with CSS media query string keys.
 *
 * See tests for input/output.
 */
export default function getResponsiveStyles({
  breakpoints,
  mapValueToProperty,
  styles,
  theme
}: Args): ResponsiveStyles {
  const styleKeys = Object.keys(styles);

  if (breakpoints) {
    const breakpointsLength = breakpoints.length;
    const mediaQueries = getMediaQueries(breakpoints, theme);
    const responsiveStyleKeys = styleKeys.filter((key) => {
      const value = styles[key];
      if (value && Array.isArray(value)) {
        /*
         * If a style property is an array, that array must be one longer than
         * the breakpoints array. The first value is the no-breakpoint case, the
         * second value corresponds to the first breakpoint, etc...
         */
        if (value.length === breakpointsLength + 1) {
          return true;
        } else {
          // prettier-ignore
          throw new Error(`${key}.length (${value.length}) must equal breakpoints.length + 1 (${breakpointsLength + 1})`);
        }
      }
    });
    const nonResponsiveStyleKeys = styleKeys.filter(
      (key) => !Array.isArray(styles[key])
    );

    // Start with the non-responsive style properties and the first value of the
    // responsive properties.
    let result = {
      ...getStyles(nonResponsiveStyleKeys, styles, mapValueToProperty),
      ...getStyles(responsiveStyleKeys, styles, mapValueToProperty, 0)
    };

    return mediaQueries.reduce((acc, query, index) => {
      acc[query] = {
        ...getStyles(responsiveStyleKeys, styles, mapValueToProperty, index + 1)
      };
      return acc;
    }, result);
  } else {
    return getStyles(styleKeys, styles, mapValueToProperty);
  }
}

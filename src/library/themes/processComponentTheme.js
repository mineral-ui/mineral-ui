/* @flow */
import mineralTheme from './mineralTheme';

import type { ThemeObj, Theme } from './types';

const filterKeys = (source: ThemeObj, exclusions: Array<string>) => {
  return exclusions.length
    ? Object.keys(source).reduce((acc, key) => {
        if (exclusions.indexOf(key) === -1) {
          acc[key] = source[key];
        }
        return acc;
      }, {})
    : source;
};

export const getProcessedComponentThemeKeys = (
  componentTheme: Theme<>,
  options?: {
    baseTheme?: ThemeObj,
    excludeKeys?: Array<string>,
    includeBaseTheme?: boolean
  } = {}
): Array<string> => {
  return Object.keys(processComponentTheme(componentTheme, options));
};

export default function processComponentTheme(
  componentThemeIn: Theme<>,
  options?: {
    baseTheme?: ThemeObj,
    excludeKeys?: Array<string>,
    includeBaseTheme?: boolean
  } = {}
) {
  const {
    baseTheme = mineralTheme,
    excludeKeys = [],
    includeBaseTheme
  } = options;
  const componentTheme =
    typeof componentThemeIn === 'function'
      ? componentThemeIn(baseTheme)
      : componentThemeIn;
  const filteredComponentTheme = filterKeys(componentTheme, excludeKeys);
  const filteredBaseTheme = filterKeys(baseTheme, excludeKeys);
  const filteredBaseThemeKeys = Object.keys(filteredBaseTheme);

  return includeBaseTheme
    ? filteredComponentTheme
    : filterKeys(filteredComponentTheme, filteredBaseThemeKeys);
}

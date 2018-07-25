/* @flow */
import mineralTheme from './mineralTheme';

const filterKeys = (source: Object, exclusions: Array<string>) => {
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
  componentTheme: Object | ((props: Object, context?: Object) => Object),
  options?: {
    baseTheme?: Object,
    excludeKeys?: Array<string>,
    includeBaseTheme?: boolean
  } = {}
) => {
  return Object.keys(processComponentTheme(componentTheme, options));
};

export default function processComponentTheme(
  componentThemeIn: Object | ((props: Object, context?: Object) => Object),
  options?: {
    baseTheme?: Object,
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

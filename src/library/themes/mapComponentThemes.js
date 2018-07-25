/* @flow */
/**
 * Generates a new component theme based on the theme of another component.
 *
 * preserveKeys
 *
 *   What does it do:
 *
 *     Ensures source theme variables are used in override styles when the
 *     source does not apply those styles and the override component is
 *     independently themeable
 *
 *     e.g. Necessary in TableHeaderCell (which is a themed TableCell) because
 *     TableCells and TableHeaderCells are both independently themeable
 *
 *   How to use:
 *
 *     Provide array of theme variable keys used in style properties applied by
 *     source component and not by override component
 */
export default function mapComponentThemes(
  source: { name: string, theme: Object },
  override: { name: string, theme: Object },
  baseTheme: Object,
  preserveKeys?: Array<string>
) {
  const REGEXP_SOURCE_NAME = new RegExp(`^${source.name}`);
  const sourceThemeWithRenamedKeys = Object.keys(source.theme).reduce(
    (acc, sourceKey) => {
      if (REGEXP_SOURCE_NAME.test(sourceKey)) {
        const overrideKey = sourceKey.replace(
          REGEXP_SOURCE_NAME,
          override.name
        );
        acc[overrideKey] = source.theme[sourceKey];
      }
      return acc;
    },
    {}
  );
  const preserved =
    preserveKeys &&
    preserveKeys.reduce((acc, sourceKey) => {
      const keyProperty = sourceKey.split('_')[1];
      acc[`${override.name}_${keyProperty}`] = source.theme[sourceKey];
      return acc;
    }, {});

  return {
    ...sourceThemeWithRenamedKeys,
    ...override.theme,
    ...baseTheme,
    ...preserved
  };
}

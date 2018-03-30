/* @flow */
/**
 * Generates a new component theme based on the theme of another component.
 */
export default function mapComponentThemes(
  source: { name: string, theme: Object },
  override: { name: string, theme: Object },
  baseTheme: Object
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

  return {
    ...baseTheme,
    ...sourceThemeWithRenamedKeys,
    ...override.theme
  };
}

/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
  const sourceThemeWithRenamedKeys = Object.keys(
    source.theme
  ).reduce((acc, sourceKey) => {
    if (REGEXP_SOURCE_NAME.test(sourceKey)) {
      const overrideKey = sourceKey.replace(REGEXP_SOURCE_NAME, override.name);
      acc[overrideKey] = source.theme[sourceKey];
    }
    return acc;
  }, {});

  return {
    ...baseTheme,
    ...sourceThemeWithRenamedKeys,
    ...override.theme
  };
}

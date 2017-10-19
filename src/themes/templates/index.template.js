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
export { default as color } from './color';
export { default as createColorRamp } from './createColorRamp';
export { default as styleVariables } from './styleVariables';
export { default as ThemeProvider } from './ThemeProvider';

/* eslint-disable prettier/prettier */
export { default as mineralTheme } from './mineralTheme';
{{#themeNames}}
export { default as {{themeName}} } from './{{themeName}}';
{{/themeNames}}
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
import React from 'react';
import { ThemeProvider as GlamorousThemeProvider } from 'glamorous';
import mineralTheme from '../themes/mineral';

type Props = {
  /** Components to which the theme will be applied */
  children?: React$Node,
  /** A shallow object of [theme variables](/theming/#theming-theme-variables) and their values */
  theme?: Object
};

/**
 * ThemeProvider passes along a theme to its children.
 */
export default function ThemeProvider({
  children,
  theme = mineralTheme
}: Props) {
  return (
    <GlamorousThemeProvider theme={theme}>{children}</GlamorousThemeProvider>
  );
}

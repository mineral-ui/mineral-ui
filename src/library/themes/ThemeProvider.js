/* @flow */
import React from 'react';
import { ThemeProvider as GlamorousThemeProvider } from 'glamorous';
import mineralTheme from './mineralTheme';

type Props = {
  /** Components to which the theme will be applied */
  children?: React$Node,
  /** A shallow object of [theme variables](/theming#common-scenarios-theme-structure) and their values */
  theme?: Object
};

/**
 * ThemeProvider provides a theme to the tree of components contained within.  See the [theming page](/theming) for more information.
 */
export default function ThemeProvider({
  children,
  theme = mineralTheme
}: Props) {
  return (
    <GlamorousThemeProvider theme={theme}>{children}</GlamorousThemeProvider>
  );
}

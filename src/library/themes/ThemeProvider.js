/* @flow */
import React, { Children } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import mineralTheme from './mineralTheme';

type Props = {
  /** Components to which the theme will be applied */
  children?: React$Node,
  /**
   * A shallow object of [theme variables](/theming#common-scenarios-theme-structure)
   * and their values or a function that provides such an object.
   */
  theme?: Object | (() => Object)
};

/**
 * ThemeProvider provides a theme to the tree of components contained within.
 * See the [theming page](/theming) for more information.
 */
const ThemeProvider = (props: Props) => {
  const { children, theme } = props;
  return (
    <EmotionThemeProvider theme={theme}>
      {Children.only(children)}
    </EmotionThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  theme: mineralTheme
};

export default ThemeProvider;

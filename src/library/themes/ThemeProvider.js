/* @flow */
import React, { Children } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import mineralTheme from './mineralTheme';

import { themeProviderPropTypes } from './propTypes';
import type { ThemeProviderProps } from './types';

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme } = props;
  return (
    <EmotionThemeProvider theme={theme}>
      {Children.only(children)}
    </EmotionThemeProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';
ThemeProvider.defaultProps = {
  theme: mineralTheme
};
ThemeProvider.propTypes = themeProviderPropTypes;

export default ThemeProvider;

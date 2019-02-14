/* @flow */
import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import wrapDisplayName from 'recompose/wrapDisplayName';
import { withTheme } from 'emotion-theming';
import ThemeProvider from './ThemeProvider';

import { Theme, ThemeFn } from './types';

const isThemeFn = (theme: Theme): theme is ThemeFn =>
  typeof theme === 'function';

// Usage: themed(component)(theme)
const themed = (WrappedComponent: React.ComponentType) => (theme: Theme) => {
  const Wrapper = (props: { theme: Theme }, context?: object) => {
    const outTheme = isThemeFn(theme) ? theme(props, context) : theme;
    const { theme: ignore, ...outProps } = props;

    return (
      <ThemeProvider theme={outTheme}>
        <WrappedComponent {...outProps} />
      </ThemeProvider>
    );
  };

  Wrapper.propTypes = WrappedComponent.propTypes;
  Wrapper.displayName = wrapDisplayName(WrappedComponent, 'Themed');

  hoistNonReactStatics(Wrapper, WrappedComponent);

  return withTheme(Wrapper);
};

export default themed;

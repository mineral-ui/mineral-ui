/* @flow */
import React from 'react';
import { withTheme } from 'glamorous';
import ThemeProvider from './ThemeProvider';

function getComponentDisplayName(Component: React$ComponentType<*>): string {
  return typeof Component === 'string'
    ? Component
    : Component.displayName || Component.name || 'Component';
}

export default function createThemedComponent(
  ComponentToTheme: React$ComponentType<*>,
  theme: Object | ((props: Object, context?: Object) => Object)
) {
  const ThemedComponent = (props, context) => {
    const outTheme =
      typeof theme === 'function' ? theme(props, context) : theme;
    const { theme: ignore, ...outProps } = props;

    return (
      <ThemeProvider theme={outTheme}>
        <ComponentToTheme {...outProps} />
      </ThemeProvider>
    );
  };

  ThemedComponent.propTypes = ComponentToTheme.propTypes;

  ThemedComponent.displayName = `Themed(${getComponentDisplayName(
    ComponentToTheme
  )})`;

  return withTheme(ThemedComponent);
}

import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from '../src/ThemeProvider';

export function mountInThemeProvider(
  Component: React$Component,
  returnThemeProvider: boolean = false
) {
  const mountedComponent = mount(
    <ThemeProvider>
      {Component}
    </ThemeProvider>
  );

  return returnThemeProvider
    ? mountedComponent
    : mountedComponent.find(Component.type);
}

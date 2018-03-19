/* @flow */
import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from '../src/library/themes/ThemeProvider';

export const mountInThemeProvider = (
  Component: React$Element<*>,
  options: { attachToDom?: boolean } = {}
) => {
  let mountNode, mountOptions;

  if (options.attachToDom) {
    mountNode = global.document.createElement('div');
    global.document.body.appendChild(mountNode);

    mountOptions = {
      attachTo: mountNode
    };
  }

  const themeProvider = mount(
    <ThemeProvider>{Component}</ThemeProvider>,
    mountOptions
  );

  if (options.attachToDom) {
    // $FlowFixMe - Add custom destroy function to make test cleanup easier
    themeProvider.destroy = () => {
      global.document.body.removeChild(mountNode);
      themeProvider.detach();
    };
  }

  const component = themeProvider.find(Component.type);

  return [themeProvider, component];
};

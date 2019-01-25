/* @flow */
import React, { cloneElement } from 'react';
import { renderToString } from 'react-dom/server';
import { mount } from 'enzyme';
import ThemeProvider from '../src/library/themes/ThemeProvider';

import type { ReactWrapper } from 'enzyme';

// This regex is likely specific to emotion ('css-[lowercaseandnumberhash]-DisplayName')
const REGEX_CLASSNAME_HASH = /css-[a-z0-9]+/g;

export const getSerializedHTML = (mountedComponent: ReactWrapper) =>
  // mountedComponent.html();
  mountedComponent.html().replace(REGEX_CLASSNAME_HASH, 'css-emotion');

export const mountInWrapper = (component: React$Element<*>) => {
  // eslint-disable-next-line react/display-name
  class Wrapper extends React.Component<*, *> {
    render() {
      return (
        <ThemeProvider>
          {cloneElement(component, { ...this.props, ...this.state })}
        </ThemeProvider>
      );
    }
  }

  return mount(<Wrapper />);
};

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

export const ssrInThemeProvider = (element: React$Element<*>) => {
  return renderToString(<ThemeProvider>{element}</ThemeProvider>);
};

export const spyOn = (wrapper: ReactWrapper, method: string) => {
  const spy = jest.spyOn(wrapper.instance(), method);
  // https://github.com/airbnb/enzyme/issues/365#issuecomment-362166762
  wrapper.instance().forceUpdate();
  return spy;
};

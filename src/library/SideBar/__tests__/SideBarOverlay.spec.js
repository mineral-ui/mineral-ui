/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '../../themes';
import SideBarOverlay from '../SideBarOverlay';
import examples from '../../../website/app/demos/SideBar/SideBarOverlay/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

function shallowSideBarOverlay(props = {}) {
  const sideBarOverlayProps = {
    ...props
  };

  return shallow(
    <ThemeProvider>
      <SideBarOverlay {...sideBarOverlayProps}>children</SideBarOverlay>
    </ThemeProvider>
  );
}

describe('SideBarOverlay', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const sideBarOverlay = shallowSideBarOverlay();

    expect(sideBarOverlay.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(<SideBarOverlay />, ['SideBarOverlay_backgroundColor']);
  });
});

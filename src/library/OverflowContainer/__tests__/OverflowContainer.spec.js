/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mineralTheme } from '../../themes';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import OverflowContainer, { componentTheme } from '../OverflowContainer';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

/*
 * [1] This getter does not exist on the HTMLElement.prototype in JSDOM, so we
 *     must mock it on the global. `clientWidth`, also used by OverflowContainer
 *     always returns 0, which is conveniently useful.
 * [2] Then we must clean up our global mocking in [1]
 */

const defaultProps = {
  scrollX: true
};

const shallowOverflowContainer = (props = {}) => {
  const containerProps = {
    ...defaultProps,
    ...props
  };
  return shallow(<OverflowContainer {...containerProps} />);
};

describe('OverflowContainer', () => {
  it('renders', () => {
    const overflowContainer = shallowOverflowContainer();

    expect(overflowContainer.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <OverflowContainer />,
      getProcessedComponentThemeKeys(componentTheme(mineralTheme))
    );
  });

  it('applies tabIndex=0 when scrollable', () => {
    // [1]
    // $FlowFixMe
    Object.defineProperties(window.HTMLElement.prototype, {
      scrollWidth: {
        // Note that this mocked getter is designed to always trigger overflow
        // because it's greater than offsetWidth
        get: () => 10,
        configurable: true
      }
    });

    const [, overflowContainer] = mountInThemeProvider(
      <OverflowContainer {...defaultProps} />
    );

    // [2]
    // $FlowFixMe
    Object.defineProperties(window.HTMLElement.prototype, {
      scrollWidth: {
        get: undefined
      }
    });

    expect(overflowContainer.html()).toMatchSnapshot();
  });
});

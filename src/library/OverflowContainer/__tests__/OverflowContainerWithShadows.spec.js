/* @flow */
import React from 'react';
import { mineralTheme } from '../../themes';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import OverflowContainerWithShadows, {
  componentTheme
} from '../OverflowContainerWithShadows';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

/*
 * [1] This getter does not exist on the HTMLElement.prototype in JSDOM, so we
 *     must mock it on the global. `clientWidth` and `offsetLeft`, also used by
 *     OverflowContainer always return 0, which is conveniently useful.
 * [2] Then we must clean up our global mocking in [1]
 */

const defaultProps = {
  scrollX: true
};

const mountOverflowContainerWithShadows = (props = {}) => {
  const containerProps = {
    ...defaultProps,
    ...props
  };
  return mountInThemeProvider(
    <OverflowContainerWithShadows {...containerProps} />
  );
};

describe('OverflowContainerWithShadows', () => {
  it('renders', () => {
    const [, overflowContainer] = mountOverflowContainerWithShadows();

    expect(overflowContainer.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <OverflowContainerWithShadows {...defaultProps} />,
      getProcessedComponentThemeKeys(componentTheme(mineralTheme), {
        excludeKeys: [
          'OverflowContainerWithShadows_boxShadowBottom',
          'OverflowContainerWithShadows_boxShadowLeft',
          'OverflowContainerWithShadows_boxShadowRight',
          'OverflowContainerWithShadows_boxShadowTop'
        ]
      })
    );
  });

  it('does not apply shadow when not scrollable', () => {
    const [, overflowContainer] = mountInThemeProvider(
      <OverflowContainerWithShadows {...defaultProps} />
    );

    expect(overflowContainer).toMatchSnapshot();
  });

  it('applies shadow when scrollable', () => {
    // [1]
    // $FlowFixMe
    Object.defineProperties(window.HTMLElement.prototype, {
      scrollWidth: {
        // Note that this mocked getter is designed to always trigger overflow
        // because it's greater than offsetLeft + offsetWidth
        get: () => 10,
        configurable: true
      }
    });

    const [, overflowContainer] = mountInThemeProvider(
      <OverflowContainerWithShadows {...defaultProps} />
    );

    // [2]
    // $FlowFixMe
    Object.defineProperties(window.HTMLElement.prototype, {
      scrollWidth: {
        get: undefined
      }
    });

    expect(overflowContainer).toMatchSnapshot();
  });
});

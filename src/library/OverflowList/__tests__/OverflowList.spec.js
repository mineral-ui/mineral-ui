/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import OverflowList, { componentTheme } from '../OverflowList';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

/*
 * [1] This getter does not exist on the HTMLElement.prototype in JSDOM, so we
 *     must mock it on the global. `clientWidth` and `offsetLeft`, also used by
 *     OverflowList always return 0, which is conveniently useful.
 * [2] Then we must clean up our global mocking in [1]
 */

function shallowOverflowList() {
  return shallow(<OverflowList />);
}

describe('OverflowList', () => {
  it('renders', () => {
    const tabs = shallowOverflowList();

    expect(tabs.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <OverflowList />,
      getProcessedComponentThemeKeys(componentTheme, {
        excludeKeys: [
          'OverflowList_gutterVertical',
          'OverflowListArrow_color',
          'OverflowListArrow_color_hover',
          'OverflowListOverflowContainer_boxShadowColor'
        ]
      })
    );
  });

  it('does not apply shadow when not scrollable', () => {
    const [, tabList] = mountInThemeProvider(<OverflowList />);

    expect(tabList).toMatchSnapshot();
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

    const [, tabList] = mountInThemeProvider(<OverflowList />);

    // [2]
    // $FlowFixMe
    Object.defineProperties(window.HTMLElement.prototype, {
      scrollWidth: {
        get: undefined
      }
    });

    expect(tabList).toMatchSnapshot();
  });
});

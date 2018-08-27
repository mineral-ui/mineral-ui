/* @flow */
import React from 'react';
import { mineralTheme } from '../../themes';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import OverflowContainerWithShadows, {
  componentTheme
} from '../OverflowContainerWithShadows';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

const mountOverflowContainerWithShadows = (props = {}) =>
  mountInThemeProvider(<OverflowContainerWithShadows {...props} />);

describe('OverflowContainerWithShadows', () => {
  it('renders', () => {
    const [, overflowContainer] = mountOverflowContainerWithShadows();

    expect(overflowContainer.exists()).toEqual(true);
  });

  // TODO: I suspect that we cannot use findDOMNode inside testThemeOverrides,
  //       which would prevent either shadow variable from ever applying. If so,
  //       we don't need the fixed heights below.
  describe('theme overrides', () => {
    testThemeOverrides(
      <OverflowContainerWithShadows style={{ height: 100 }}>
        <div style={{ height: 1000 }} />
      </OverflowContainerWithShadows>,
      getProcessedComponentThemeKeys(componentTheme(mineralTheme), {
        excludeKeys: [
          'OverflowContainerWithShadows_boxShadowBottom',
          'OverflowContainerWithShadows_boxShadowTop'
        ]
      })
    );
  });
});

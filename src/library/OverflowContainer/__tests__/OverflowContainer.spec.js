/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mineralTheme } from '../../themes';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import OverflowContainer, { componentTheme } from '../OverflowContainer';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

const shallowOverflowContainer = (props = {}) =>
  shallow(<OverflowContainer {...props} />);

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
});

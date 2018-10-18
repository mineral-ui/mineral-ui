/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import NavLink, { componentTheme } from '../NavLink';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowNavLink(props = {}) {
  const navLinkProps = {
    id: 'test',
    index: 0,
    title: 'Test',
    panelId: 'panel',
    selected: false,
    ...props
  };
  return shallow(<NavLink {...navLinkProps} />);
}

describe('NavLink', () => {
  it('renders', () => {
    const horizontalNavigation = shallowNavLink();

    expect(horizontalNavigation.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    const navLinkProps = {
      id: 'test',
      index: 0,
      title: 'Test',
      panelId: 'panel',
      selected: true
    };
    testThemeOverrides(
      <NavLink {...navLinkProps}>test</NavLink>,
      getProcessedComponentThemeKeys(componentTheme, {
        excludeKeys: ['NavLink_color']
      })
    );
  });
});

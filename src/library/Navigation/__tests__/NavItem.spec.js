/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { NavItem, primaryNavItemTheme, secondaryNavItemTheme } from '../';
import examples from '../../../website/app/demos/Navigation/NavItem/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

const defaultProps = {
  children: 'Item 0',
  href: 'page-0'
};

function shallowNavItem(props = {}) {
  const navItemProps = {
    ...props
  };
  return shallow(<NavItem {...navItemProps} />);
}

describe('NavItem', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const navItem = shallowNavItem();

    expect(navItem.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    // Because we're testing the `selected` NavItem, this theme var never applies
    const noHover = (key) => key.indexOf('hover') === -1;

    testThemeOverrides(
      <NavItem {...defaultProps} selected prefix="Primary" type="" />,
      getProcessedComponentThemeKeys(primaryNavItemTheme, {
        excludeKeys: ['PrimaryNavItem_color_disabled']
      })
        .filter(noHover)
        .filter((key) => key.indexOf('minimal') === -1)
    );
    testThemeOverrides(
      <NavItem {...defaultProps} selected prefix="Primary" type="_minimal" />,
      getProcessedComponentThemeKeys(primaryNavItemTheme)
        .filter(noHover)
        .filter((key) => key.indexOf('minimal') !== -1)
    );
    testThemeOverrides(
      <NavItem {...defaultProps} selected prefix="Secondary" type="_pills" />,
      getProcessedComponentThemeKeys(secondaryNavItemTheme)
        .filter(noHover)
        .filter((key) => key.indexOf('tabs') === -1)
    );
    testThemeOverrides(
      <NavItem {...defaultProps} selected prefix="Secondary" type="_tabs" />,
      getProcessedComponentThemeKeys(secondaryNavItemTheme)
        .filter(noHover)
        .filter((key) => key.indexOf('tabs') !== -1)
    );
  });
});

/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import {
  NavItem,
  PrimaryNav,
  SecondaryNav,
  primaryNavItemTheme,
  primaryNavTheme,
  secondaryNavItemTheme,
  secondaryNavTheme
} from '../index';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

describe('NavItem', () => {
  describe('theme overrides', () => {
    const defaultProps = {
      children: 'Item 0',
      href: 'page-0'
    };
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

describe('PrimaryNav', () => {
  describe('theme overrides', () => {
    const defaultProps = {
      items: [
        {
          href: 'page-0',
          text: 'Item 0'
        },
        {
          href: 'page-1',
          text: 'Item 1'
        },
        {
          href: 'page-2',
          text: 'Item 2'
        }
      ]
    };

    testThemeOverrides(
      <PrimaryNav {...defaultProps} />,
      getProcessedComponentThemeKeys(primaryNavTheme).filter(
        (key) => key.indexOf('minimal') === -1
      )
    );
    testThemeOverrides(
      <PrimaryNav {...defaultProps} minimal />,
      getProcessedComponentThemeKeys(primaryNavTheme).filter(
        (key) => key.indexOf('minimal') !== -1
      )
    );
  });
});

describe('SecondaryNav', () => {
  describe('theme overrides', () => {
    const defaultProps = {
      items: [
        {
          href: 'page-0',
          text: 'Item 0'
        },
        {
          href: 'page-1',
          text: 'Item 1'
        },
        {
          href: 'page-2',
          text: 'Item 2'
        }
      ]
    };

    testThemeOverrides(
      <SecondaryNav {...defaultProps} />,
      getProcessedComponentThemeKeys(secondaryNavTheme).filter(
        (key) => key.indexOf('tabs') === -1
      )
    );
    testThemeOverrides(
      <SecondaryNav {...defaultProps} type="tabs" />,
      getProcessedComponentThemeKeys(secondaryNavTheme).filter(
        (key) => key.indexOf('pills') === -1
      )
    );
  });
});

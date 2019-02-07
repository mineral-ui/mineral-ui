/* @flow */
import { pxToEm } from '../styles';

import {
  PrimaryNavThemeFn,
  SecondaryNavThemeFn,
  NavigationThemeFn,
  PrimaryNavItemThemeFn,
  SecondaryNavItemThemeFn,
  NavItemThemeFn
} from './types';

export const primaryNavTheme: PrimaryNavThemeFn = (baseTheme: object) => ({
  PrimaryNav_backgroundColor: baseTheme.backgroundColor_themePrimary,
  PrimaryNav_backgroundColor_minimal: baseTheme.backgroundColor,
  PrimaryNav_gutter: baseTheme.space_inline_xs,
  PrimaryNav_paddingHorizontal: baseTheme.space_inline_xl,
  PrimaryNav_paddingVertical: baseTheme.space_stack_sm
});

export const secondaryNavTheme: SecondaryNavThemeFn = (baseTheme: object) => ({
  SecondaryNav_backgroundColor_pills: baseTheme.backgroundColor,
  SecondaryNav_backgroundColor_tabs: baseTheme.color_gray_20,
  SecondaryNav_border: `1px solid ${baseTheme.color_gray_30}`,
  SecondaryNav_gutter: baseTheme.space_inline_xxs,
  SecondaryNav_paddingHorizontal: pxToEm(12),
  SecondaryNav_paddingVertical: baseTheme.space_stack_sm
});

export const navigationTheme: NavigationThemeFn = (baseTheme: object) => ({
  ...primaryNavTheme(baseTheme),
  ...secondaryNavTheme(baseTheme),

  ...baseTheme
});

export const primaryNavItemTheme: PrimaryNavItemThemeFn = (
  baseTheme: object
) => ({
  PrimaryNavItem_backgroundColor: 'transparent',
  PrimaryNavItem_backgroundColor_active: baseTheme.color_theme_80,
  PrimaryNavItem_backgroundColor_focus: 'transparent',
  PrimaryNavItem_backgroundColor_hover: baseTheme.color_theme_70,
  PrimaryNavItem_backgroundColor_selected: baseTheme.color_theme_80,
  PrimaryNavItem_backgroundColor_minimal: 'transparent',
  PrimaryNavItem_backgroundColor_minimal_active: baseTheme.color_gray_10,
  PrimaryNavItem_backgroundColor_minimal_focus: 'transparent',
  PrimaryNavItem_backgroundColor_minimal_hover: 'transparent',
  PrimaryNavItem_backgroundColor_minimal_selected: baseTheme.color_gray_10,
  PrimaryNavItem_borderColor: 'transparent',
  PrimaryNavItem_borderColor_active: 'transparent',
  PrimaryNavItem_borderColor_focus: baseTheme.color_theme_20,
  PrimaryNavItem_borderColor_hover: 'transparent',
  PrimaryNavItem_borderColor_selected: baseTheme.color_theme_80,
  PrimaryNavItem_borderColor_minimal: 'transparent',
  PrimaryNavItem_borderColor_minimal_active: 'transparent',
  PrimaryNavItem_borderColor_minimal_focus: baseTheme.color_theme_40,
  PrimaryNavItem_borderColor_minimal_hover: 'transparent',
  PrimaryNavItem_borderColor_minimal_selected: baseTheme.color_theme_40,
  PrimaryNavItem_color: baseTheme.color_themePrimary,
  PrimaryNavItem_color_disabled: baseTheme.color_theme_40,
  PrimaryNavItem_color_hover: baseTheme.color_themePrimary,
  PrimaryNavItem_color_selected: baseTheme.color_themePrimary,
  PrimaryNavItem_color_minimal: baseTheme.color_gray_80,
  PrimaryNavItem_color_minimal_hover: baseTheme.color_theme_60,
  PrimaryNavItem_color_minimal_selected: baseTheme.color_theme_70,
  PrimaryNavItem_paddingHorizontal: baseTheme.space_inset_sm,

  PrimaryNavItemIcon_color: 'inherit'
});

export const secondaryNavItemTheme: SecondaryNavItemThemeFn = (
  baseTheme: object
) => ({
  SecondaryNavItem_backgroundColor_pills: 'transparent',
  SecondaryNavItem_backgroundColor_pills_active: baseTheme.color_gray_10,
  SecondaryNavItem_backgroundColor_pills_focus: 'transparent',
  SecondaryNavItem_backgroundColor_pills_hover: 'transparent',
  SecondaryNavItem_backgroundColor_pills_selected:
    baseTheme.backgroundColor_themePrimary,
  SecondaryNavItem_backgroundColor_tabs: 'transparent',
  SecondaryNavItem_backgroundColor_tabs_active: baseTheme.color_gray_10,
  SecondaryNavItem_backgroundColor_tabs_focus: 'transparent',
  SecondaryNavItem_backgroundColor_tabs_hover: 'transparent',
  SecondaryNavItem_backgroundColor_tabs_selected: baseTheme.backgroundColor,
  SecondaryNavItem_borderColor_pills: 'transparent',
  SecondaryNavItem_borderColor_pills_active: 'transparent',
  SecondaryNavItem_borderColor_pills_focus: baseTheme.color_theme_40,
  SecondaryNavItem_borderColor_pills_hover: 'transparent',
  SecondaryNavItem_borderColor_pills_selected:
    baseTheme.backgroundColor_themePrimary,
  SecondaryNavItem_borderColor_tabs: 'transparent',
  SecondaryNavItem_borderColor_tabs_active: 'transparent',
  SecondaryNavItem_borderColor_tabs_focus: baseTheme.color_theme_40,
  SecondaryNavItem_borderColor_tabs_hover: 'transparent',
  SecondaryNavItem_borderColor_tabs_selected: baseTheme.color_theme_40,
  SecondaryNavItem_color_pills: baseTheme.color_gray_80,
  SecondaryNavItem_color_pills_hover: baseTheme.color_theme_60,
  SecondaryNavItem_color_pills_selected: baseTheme.color_themePrimary,
  SecondaryNavItem_color_tabs: baseTheme.color_gray_80,
  SecondaryNavItem_color_tabs_hover: baseTheme.color_theme_60,
  SecondaryNavItem_color_tabs_selected: baseTheme.color_theme_70,
  SecondaryNavItem_paddingHorizontal: baseTheme.space_inset_md,

  SecondaryNavItemIcon_color: 'inherit'
});

export const navItemTheme: NavItemThemeFn = (baseTheme: object) => ({
  ...primaryNavItemTheme(baseTheme),
  ...secondaryNavItemTheme(baseTheme),

  ...baseTheme
});

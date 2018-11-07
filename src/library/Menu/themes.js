/* @flow */
import type {
  MenuDividerThemeFn,
  MenuGroupThemeFn,
  MenuGroupTitleThemeFn,
  MenuItemThemeFn
} from './types';

export const menuDividerTheme: MenuDividerThemeFn = (baseTheme) => ({
  MenuDivider_borderColor: baseTheme.borderColor,
  MenuDivider_borderWidth: '1px',
  MenuDivider_margin: baseTheme.space_stack_sm,

  ...baseTheme
});

export const menuGroupTheme: MenuGroupThemeFn = (baseTheme) => ({
  MenuGroup_margin: baseTheme.space_stack_sm,

  ...baseTheme
});

// [1] Deviation from h5 for optics relative to a MenuItem
export const menuGroupTitleTheme: MenuGroupTitleThemeFn = (baseTheme) => ({
  MenuGroupTitle_fontSize: baseTheme.fontSize_mouse, // [1]
  MenuGroupTitle_fontWeight: baseTheme.h5_fontWeight,
  MenuGroupTitle_paddingTop: baseTheme.space_stack_md,
  MenuGroupTitle_paddingBottom: baseTheme.space_stack_sm,

  ...baseTheme
});

// Some of these values (all of the margins & paddings and the content fontSize)
// come from Button (large)
// prettier-ignore
export const menuItemTheme: MenuItemThemeFn = (baseTheme) => ({
  MenuItem_backgroundColor_selected: baseTheme.backgroundColor_theme_selected,
  MenuItem_backgroundColor_active: baseTheme.color_gray_20,
  MenuItem_backgroundColor_focus: baseTheme.color_gray_10,
  MenuItem_backgroundColor_hover: baseTheme.color_gray_10,
  MenuItem_backgroundColor_selectedActive: baseTheme.backgroundColor_theme_selectedActive,
  MenuItem_backgroundColor_selectedHover: baseTheme.backgroundColor_theme_selectedHover,
  MenuItem_color: baseTheme.color,
  MenuItem_fontWeight: baseTheme.fontWeight_regular,
  MenuItem_fontWeight_selected: baseTheme.fontWeight_bold,
  MenuItem_paddingHorizontal: baseTheme.space_inset_md,
  MenuItem_paddingVertical: baseTheme.space_inset_sm,

  MenuItemContent_fontSize: baseTheme.fontSize_ui,

  MenuItemIcon_color: baseTheme.icon_color_theme,
  MenuItemIcon_margin: baseTheme.space_inset_sm,

  MenuItemSecondaryText_color: baseTheme.color_mouse,
  MenuItemSecondaryText_fontSize: baseTheme.fontSize_mouse,

  ...baseTheme
});

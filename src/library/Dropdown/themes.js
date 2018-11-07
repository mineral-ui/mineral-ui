/* @flow */

import type { DropdownThemeFn, DropdownContentThemeFn } from './types';

export const dropdownTheme: DropdownThemeFn = (baseTheme) => ({
  ...dropdownContentTheme(baseTheme),
  ...baseTheme
});

export const dropdownContentTheme: DropdownContentThemeFn = (baseTheme) => ({
  DropdownContent_backgroundColor: baseTheme.panel_backgroundColor,
  DropdownContent_borderColor: baseTheme.panel_borderColor,
  DropdownContent_borderRadius: baseTheme.borderRadius_1,
  DropdownContent_boxShadow: baseTheme.boxShadow_2,
  DropdownContent_margin: '5px',
  DropdownContent_zIndex: baseTheme.zIndex_100,
  ...baseTheme
});

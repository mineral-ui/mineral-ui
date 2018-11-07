/* @flow */
import type { ButtonGroupThemeFn } from './types';

export const buttonGroupTheme: ButtonGroupThemeFn = (baseTheme) => ({
  ButtonGroupButton_backgroundColor_checkedDisabled: baseTheme.color_gray_40,
  ButtonGroupButton_border_disabled: `solid 1px ${baseTheme.borderColor}`,
  ButtonGroupButton_borderColor_active: baseTheme.borderColor_theme_active,
  ButtonGroupButton_borderColor_hover: baseTheme.borderColor_theme_hover,
  ButtonGroupButton_borderStartColor: baseTheme.borderColor,
  ButtonGroupButton_borderStartColor_checked: 'currentcolor',
  ButtonGroupButton_color_checkedDisabled: baseTheme.color_gray_60,

  ...baseTheme
});

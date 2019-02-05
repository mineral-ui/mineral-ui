/* @flow */
import { pxToEm } from '../styles';

import type { ButtonThemeFn } from './types';

// prettier-ignore
export const buttonTheme: ButtonThemeFn = (baseTheme) => ({
  Button_backgroundColor: baseTheme.backgroundColor,
  Button_backgroundColor_active: baseTheme.backgroundColor_active,
  Button_backgroundColor_focus: baseTheme.backgroundColor_focus,
  Button_backgroundColor_hover: baseTheme.backgroundColor_hover,
  Button_backgroundColor_minimal_active: baseTheme.backgroundColor_active,
  Button_backgroundColor_minimal_hover: baseTheme.backgroundColor_hover,
  Button_backgroundColor_primary: baseTheme.backgroundColor_themePrimary,
  Button_backgroundColor_primary_active: baseTheme.backgroundColor_themePrimary_active,
  Button_backgroundColor_primary_focus: baseTheme.backgroundColor_themePrimary_focus,
  Button_backgroundColor_primary_hover: baseTheme.backgroundColor_themePrimary_hover,
  Button_borderColor: baseTheme.borderColor,
  Button_borderColor_active: baseTheme.borderColor_theme_active,
  Button_borderColor_focus: baseTheme.borderColor_theme_focus,
  Button_borderColor_hover: baseTheme.borderColor_theme_hover,
  Button_borderRadius: baseTheme.borderRadius_1,
  Button_borderWidth: 1, // px
  Button_boxShadow_focus: `0 0 0 1px ${baseTheme.boxShadow_focusInner}, 0 0 0 2px ${baseTheme.borderColor_theme_focus}`,
  Button_color: baseTheme.color_theme,
  Button_color_minimal: baseTheme.color_theme,
  Button_color_primary: baseTheme.color_themePrimary,
  Button_fontWeight: baseTheme.fontWeight_semiBold,
  Button_paddingHorizontal: baseTheme.space_inset_sm,
  Button_paddingIconOnly_small: pxToEm(3),
  Button_paddingIconOnly_medium: pxToEm(7),
  Button_paddingIconOnly_large: pxToEm(7),
  Button_paddingIconOnly_jumbo: pxToEm(13),
  Button_height_small: baseTheme.size_small,
  Button_height_medium: baseTheme.size_medium,
  Button_height_large: baseTheme.size_large,
  Button_height_jumbo: baseTheme.size_jumbo,

  ButtonContent_fontSize: baseTheme.fontSize_ui,
  ButtonContent_fontSize_small: pxToEm(12),

  ButtonIcon_color: baseTheme.icon_color_theme,
  ButtonIcon_margin: baseTheme.space_inset_sm,

  ...baseTheme
});

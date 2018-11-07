/* @flow */
import type { LinkThemeFn } from './types';

export const linkTheme: LinkThemeFn = (baseTheme) => ({
  Link_borderColor_focus: baseTheme.borderColor_theme_focus,
  Link_color: baseTheme.color_theme,
  Link_color_active: baseTheme.color_theme_active,
  Link_color_hover: baseTheme.color_theme_hover,
  Link_color_focus: baseTheme.color_theme_focus,

  ...baseTheme
});

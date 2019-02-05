/* @flow */
import type { AvatarThemeFn } from './types';

export const avatarTheme: AvatarThemeFn = (baseTheme) => ({
  Avatar_fontSize_small: baseTheme.fontSize_mouse,
  Avatar_fontSize_medium: baseTheme.fontSize_ui,
  Avatar_fontSize_large: baseTheme.h4_fontSize,
  Avatar_fontSize_jumbo: baseTheme.h4_fontSize,
  Avatar_fontWeight: baseTheme.fontWeight_bold,
  Avatar_size_small: baseTheme.size_small,
  Avatar_size_medium: baseTheme.size_medium,
  Avatar_size_large: baseTheme.size_large,
  Avatar_size_jumbo: baseTheme.size_jumbo,

  ...baseTheme
});

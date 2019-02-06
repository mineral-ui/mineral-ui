/* @flow */
import { SHAPE, SIZE } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

type Shape = keyof typeof SHAPE;
type Size = keyof typeof SIZE;

export interface AvatarProps {
  abbr?: string;
  background?: string;
  children: React.ReactNode;
  color?: string;
  shape?: Shape;
  size?: Size;
}

export interface AvatarDefaultProps {
  shape: Shape;
  size: Size;
}

export interface AvatarStyleProps
  extends Pick<AvatarProps, 'background' | 'color' | 'shape' | 'size'> {
  icon?: React.ReactNode;
  noBackground?: boolean;
}

export type AvatarThemeFn = ComponentThemeFn<AvatarTheme>;
export type AvatarTheme = ComponentTheme<AvatarThemeKeys>;
interface AvatarThemeKeys {
  Avatar_fontSize_small: ThemeValue;
  Avatar_fontSize_medium: ThemeValue;
  Avatar_fontSize_large: ThemeValue;
  Avatar_fontSize_jumbo: ThemeValue;
  Avatar_fontWeight: ThemeValue;
  Avatar_size_small: ThemeValue;
  Avatar_size_medium: ThemeValue;
  Avatar_size_large: ThemeValue;
  Avatar_size_jumbo: ThemeValue;
}

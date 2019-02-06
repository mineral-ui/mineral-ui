/* @flow */
import { SIZE } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

type Size = keyof typeof SIZE | number | string;

export interface IconProps {
  children?: React.ReactNode;
  color?: string;
  rtl?: boolean;
  size?: Size;
  title?: string;
}

export interface IconDefaultProps {
  size: Size;
}

export type IconThemeFn = ComponentThemeFn<IconTheme>;
export type IconTheme = ComponentTheme<IconThemeKeys>;
interface IconThemeKeys {
  Icon_fill: ThemeValue;
  Icon_size_small: ThemeValue;
  Icon_size_medium: ThemeValue;
  Icon_size_large: ThemeValue;
}

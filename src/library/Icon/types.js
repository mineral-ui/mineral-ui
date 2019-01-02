/* @flow */
import { SIZE } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type Size = $Keys<typeof SIZE> | number | string;

export type IconProps = {
  children?: React$Node,
  color?: string,
  rtl?: boolean,
  size?: Size,
  title?: string
};

export type IconDefaultProps = {
  size: Size
};

export type IconThemeFn = ComponentThemeFn<IconTheme>;
export type IconTheme = ComponentTheme<IconThemeKeys>;
type IconThemeKeys = {|
  Icon_fill: ThemeValue,
  Icon_size_small: ThemeValue,
  Icon_size_medium: ThemeValue,
  Icon_size_large: ThemeValue
|};

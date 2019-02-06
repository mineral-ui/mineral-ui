/* @flow */
import { VARIANT } from './constants';

import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type LinkProps = {
  children?: React.ReactNode,
  href?: string,
  variant?: keyof typeof VARIANT
};

export type LinkThemeFn = ComponentThemeFn<LinkTheme>;
export type LinkTheme = ComponentTheme<LinkThemeKeys>;
type LinkThemeKeys = {
  Link_borderColor_focus: ThemeValue,
  Link_color: ThemeValue,
  Link_color_active: ThemeValue,
  Link_color_hover: ThemeValue,
  Link_color_focus: ThemeValue
};

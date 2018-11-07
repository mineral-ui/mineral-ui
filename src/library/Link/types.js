/* @flow */
import { VARIANT } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type LinkProps = {
  children?: React$Node,
  href?: string,
  element?: $FlowFixMe, // Should allow string | React$ComponentType<*>
  variant?: $Keys<typeof VARIANT>
};

export type LinkDefaultProps = {
  element: $FlowFixMe // Should allow string | React$ComponentType<*>
};

export type LinkThemeFn = ComponentThemeFn<LinkTheme>;
export type LinkTheme = ComponentTheme<LinkThemeKeys>;
type LinkThemeKeys = {|
  Link_borderColor_focus: ThemeValue,
  Link_color: ThemeValue,
  Link_color_active: ThemeValue,
  Link_color_hover: ThemeValue,
  Link_color_focus: ThemeValue
|};

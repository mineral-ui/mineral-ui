/* @flow */
import { SIZE, VARIANT } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type Size = $Keys<typeof SIZE>;
type Variant = $Keys<typeof VARIANT>;

export type ButtonProps = {
  children?: React$Node,
  circular?: boolean,
  disabled?: boolean,
  forwardedRef?: React$Ref<*>,
  fullWidth?: boolean,
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  minimal?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  primary?: boolean,
  size?: Size,
  type?: string,
  variant?: Variant
};

export type ButtonDefaultProps = {
  size: Size
};

export type ButtonThemeFn = ComponentThemeFn<ButtonTheme>;
export type ButtonTheme = ComponentTheme<ButtonThemeKeys>;
type ButtonThemeKeys = {|
  Button_backgroundColor: ThemeValue,
  Button_backgroundColor_active: ThemeValue,
  Button_backgroundColor_focus: ThemeValue,
  Button_backgroundColor_hover: ThemeValue,
  Button_backgroundColor_minimal_active: ThemeValue,
  Button_backgroundColor_minimal_hover: ThemeValue,
  Button_backgroundColor_primary: ThemeValue,
  Button_backgroundColor_primary_active: ThemeValue,
  Button_backgroundColor_primary_focus: ThemeValue,
  Button_backgroundColor_primary_hover: ThemeValue,
  Button_borderColor: ThemeValue,
  Button_borderColor_active: ThemeValue,
  Button_borderColor_focus: ThemeValue,
  Button_borderColor_hover: ThemeValue,
  Button_borderRadius: ThemeValue,
  Button_borderWidth: ThemeValue,
  Button_boxShadow_focus: ThemeValue,
  Button_color: ThemeValue,
  Button_color_minimal: ThemeValue,
  Button_color_primary: ThemeValue,
  Button_fontWeight: ThemeValue,
  Button_paddingHorizontal: ThemeValue,
  Button_paddingIconOnly_small: ThemeValue,
  Button_paddingIconOnly_medium: ThemeValue,
  Button_paddingIconOnly_large: ThemeValue,
  Button_paddingIconOnly_jumbo: ThemeValue,
  Button_height_small: ThemeValue,
  Button_height_medium: ThemeValue,
  Button_height_large: ThemeValue,
  Button_height_jumbo: ThemeValue,
  ButtonContent_fontSize: ThemeValue,
  ButtonContent_fontSize_small: ThemeValue,
  ButtonIcon_color: ThemeValue,
  ButtonIcon_margin: ThemeValue
|};

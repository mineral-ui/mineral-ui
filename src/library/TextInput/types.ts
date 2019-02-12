/* @flow */
import { SIZE, TYPE, VARIANT } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

type Size = keyof typeof SIZE;
type Type = keyof typeof TYPE;
type Variant = keyof typeof VARIANT;

export interface TextInputProps {
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  htmlSize?: number | string;
  iconStart?: React.ReactElement<any>;
  iconEnd?: React.ReactElement<any>;
  inputRef?: (node: React.Component | null | undefined) => void;
  rootProps?: object;
  invalid?: boolean;
  onChange?: (event: React.SyntheticEvent) => void;
  prefix?: string | React.ReactElement<any>;
  readOnly?: boolean;
  required?: boolean;
  size?: Size;
  suffix?: string | React.ReactElement<any>;
  type?: Type;
  value?: string;
  variant?: Variant;
}

export interface TextInputDefaultProps {
  size: Size;
  type: Type;
}

export type TextInputThemeFn = ComponentThemeFn<TextInputTheme>;
export type TextInputTheme = ComponentTheme<TextInputThemeKeys>;
interface TextInputThemeKeys {
  TextInput_backgroundColor: ThemeValue;
  TextInput_borderColor: ThemeValue;
  TextInput_borderColor_active: ThemeValue;
  TextInput_borderColor_focus: ThemeValue;
  TextInput_borderColor_hover: ThemeValue;
  TextInput_borderRadius: ThemeValue;
  TextInput_borderWidth: ThemeValue;
  TextInput_boxShadow_active: ThemeValue;
  TextInput_boxShadow_focus: ThemeValue;
  TextInput_color: ThemeValue;
  TextInput_color_placeholder: ThemeValue;
  TextInput_color_readOnly: ThemeValue;
  TextInput_fontSize: ThemeValue;
  TextInput_fontSize_small: ThemeValue;
  TextInput_height_small: ThemeValue;
  TextInput_height_medium: ThemeValue;
  TextInput_height_large: ThemeValue;
  TextInput_height_jumbo: ThemeValue;
  TextInput_paddingHorizontal: ThemeValue;
  TextInput_paddingHorizontal_small: ThemeValue;
  TextInputIcon_color: ThemeValue;
  TextInputIcon_marginHorizontal: ThemeValue;
}

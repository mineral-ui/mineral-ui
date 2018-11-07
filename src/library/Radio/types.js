/* @flow */
import { LABEL_POSITION, SIZE } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type LabelPosition = $Keys<typeof LABEL_POSITION>;
type Size = $Keys<typeof SIZE>;

export type RadioProps = {
  checked?: boolean,
  className?: string,
  defaultChecked?: boolean,
  disabled?: boolean,
  hideLabel?: boolean,
  inputRef?: (node: ?HTMLInputElement) => void,
  invalid?: boolean,
  justify?: boolean,
  label: string | React$Element<*>,
  labelPosition?: LabelPosition,
  name?: string,
  onChange?: (event: SyntheticInputEvent<>) => void,
  required?: boolean,
  rootProps?: Object,
  size?: Size,
  value?: string
};

export type RadioDefaultProps = {
  labelPosition: LabelPosition,
  size: Size
};

export type RadioGroupProps = {
  checked?: string,
  children?: React$Node,
  data?: Array<{ label: string | React$Element<*>, value: string }>,
  defaultChecked?: string,
  inline?: boolean,
  name: string,
  onChange?: (event: SyntheticEvent<>) => void,
  rootProps?: Object
};

export type RadioThemeFn = ComponentThemeFn<RadioTheme>;
export type RadioTheme = ComponentTheme<RadioThemeKeys>;
type RadioThemeKeys = {|
  RadioControl_backgroundColor: ThemeValue,
  RadioControl_backgroundColor_checked: ThemeValue,
  RadioControl_backgroundColor_checkedHover: ThemeValue,
  RadioControl_borderColor: ThemeValue,
  RadioControl_borderColor_hover: ThemeValue,
  RadioControl_borderColor_checked: ThemeValue,
  RadioControl_borderColor_checkedHover: ThemeValue,
  RadioControl_borderRadius: ThemeValue,
  RadioControl_boxShadow_focus: ThemeValue,
  RadioControl_size: ThemeValue,
  RadioControl_size_jumbo: ThemeValue,
  RadioText_color: ThemeValue,
  RadioText_fontSize: ThemeValue,
  RadioText_fontSize_small: ThemeValue,
  RadioText_marginHorizontal: ThemeValue
|};

export type RadioGroupThemeFn = ComponentThemeFn<RadioGroupTheme>;
export type RadioGroupTheme = ComponentTheme<RadioGroupThemeKeys>;
type RadioGroupThemeKeys = {|
  RadioGroupControl_marginHorizontal_inline: ThemeValue,
  RadioGroupControl_marginVertical_stacked: ThemeValue,
  RadioGroupControl_marginVertical_stackedJumbo: ThemeValue
|};

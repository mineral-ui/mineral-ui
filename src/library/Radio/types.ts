/* @flow */
import { LABEL_POSITION, SIZE } from './constants';

import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type LabelPosition = keyof typeof LABEL_POSITION;
type Size = keyof typeof SIZE;

export type RadioProps = {
  checked?: boolean,
  className?: string,
  defaultChecked?: boolean,
  disabled?: boolean,
  hideLabel?: boolean,
  inputRef?: (node: HTMLInputElement | null | undefined) => void,
  invalid?: boolean,
  justify?: boolean,
  label: string | React.ReactElement<any>,
  labelPosition?: LabelPosition,
  name?: string,
  onChange?: (event: React.SyntheticEvent) => void,
  required?: boolean,
  rootProps?: object,
  size?: Size,
  value?: string
};

export type RadioDefaultProps = {
  labelPosition: LabelPosition,
  size: Size
};

export type RadioGroupProps = {
  checked?: string,
  children?: React.ReactNode,
  data?: Array<{ label: string | React.ReactElement<any>, value: string }>,
  defaultChecked?: string,
  inline?: boolean,
  name: string,
  onChange?: (event: React.SyntheticEvent) => void,
  rootProps?: object
};

export type RadioThemeFn = ComponentThemeFn<RadioTheme>;
export type RadioTheme = ComponentTheme<RadioThemeKeys>;
type RadioThemeKeys = {
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
};

export type RadioGroupThemeFn = ComponentThemeFn<RadioGroupTheme>;
export type RadioGroupTheme = ComponentTheme<RadioGroupThemeKeys>;
type RadioGroupThemeKeys = {
  RadioGroupControl_marginHorizontal_inline: ThemeValue,
  RadioGroupControl_marginVertical_stacked: ThemeValue,
  RadioGroupControl_marginVertical_stackedJumbo: ThemeValue
};

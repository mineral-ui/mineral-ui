/* @flow */
import { LABEL_POSITION, SIZE } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';
import { ChoiceProps, ChoiceGroupProps } from '../Choice/types';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type LabelPosition = keyof typeof LABEL_POSITION;
type Size = keyof typeof SIZE;

export interface RadioProps extends Omit<ChoiceProps, 'iconChecked' | 'type'> {}

export interface RadioDefaultProps {
  labelPosition: LabelPosition;
  size: Size;
}

export interface RadioGroupProps extends ChoiceGroupProps {
  checked?: string;
  defaultChecked?: string;
}

export type RadioThemeFn = ComponentThemeFn<RadioTheme>;
export type RadioTheme = ComponentTheme<RadioThemeKeys>;
interface RadioThemeKeys {
  RadioControl_backgroundColor: ThemeValue;
  RadioControl_backgroundColor_checked: ThemeValue;
  RadioControl_backgroundColor_checkedHover: ThemeValue;
  RadioControl_borderColor: ThemeValue;
  RadioControl_borderColor_hover: ThemeValue;
  RadioControl_borderColor_checked: ThemeValue;
  RadioControl_borderColor_checkedHover: ThemeValue;
  RadioControl_borderRadius: ThemeValue;
  RadioControl_boxShadow_focus: ThemeValue;
  RadioControl_size: ThemeValue;
  RadioControl_size_jumbo: ThemeValue;
  RadioText_color: ThemeValue;
  RadioText_fontSize: ThemeValue;
  RadioText_fontSize_small: ThemeValue;
  RadioText_marginHorizontal: ThemeValue;
}

export type RadioGroupThemeFn = ComponentThemeFn<RadioGroupTheme>;
export type RadioGroupTheme = ComponentTheme<RadioGroupThemeKeys>;
interface RadioGroupThemeKeys {
  RadioGroupControl_marginHorizontal_inline: ThemeValue;
  RadioGroupControl_marginVertical_stacked: ThemeValue;
  RadioGroupControl_marginVertical_stackedJumbo: ThemeValue;
}

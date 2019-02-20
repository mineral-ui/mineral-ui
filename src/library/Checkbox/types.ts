/* @flow */
import { SIZE, LABEL_POSITION } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';
import { ChoiceProps, ChoiceGroupProps } from '../Choice/types';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type LabelPosition = keyof typeof LABEL_POSITION;
type Size = keyof typeof SIZE;

export interface CheckboxProps
  extends Omit<ChoiceProps, 'iconChecked' | 'type'> {
  defaultIndeterminate?: boolean;
  indeterminate?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
}

export interface CheckboxDefaultProps {
  labelPosition: LabelPosition;
  size: Size;
}

export interface CheckboxGroupProps extends ChoiceGroupProps {
  checked?: Array<string>;
  defaultChecked?: Array<string>;
}

export type CheckboxThemeFn = ComponentThemeFn<CheckboxTheme>;
export type CheckboxTheme = ComponentTheme<CheckboxThemeKeys>;
interface CheckboxThemeKeys {
  CheckboxControl_backgroundColor: ThemeValue;
  CheckboxControl_backgroundColor_checked: ThemeValue;
  CheckboxControl_backgroundColor_checkedHover: ThemeValue;
  CheckboxControl_borderColor: ThemeValue;
  CheckboxControl_borderColor_hover: ThemeValue;
  CheckboxControl_borderColor_checked: ThemeValue;
  CheckboxControl_borderColor_checkedHover: ThemeValue;
  CheckboxControl_borderRadius: ThemeValue;
  CheckboxControl_boxShadow_focus: ThemeValue;
  CheckboxControl_size: ThemeValue;
  CheckboxControl_size_jumbo: ThemeValue;
  CheckboxText_color: ThemeValue;
  CheckboxText_fontSize: ThemeValue;
  CheckboxText_fontSize_small: ThemeValue;
  CheckboxText_marginHorizontal: ThemeValue;
}

export type CheckboxGroupThemeFn = ComponentThemeFn<CheckboxGroupTheme>;
export type CheckboxGroupTheme = ComponentTheme<CheckboxGroupThemeKeys>;
interface CheckboxGroupThemeKeys {
  CheckboxGroupControl_marginHorizontal_inline: ThemeValue;
  CheckboxGroupControl_marginVertical_stacked: ThemeValue;
  CheckboxGroupControl_marginVertical_stackedJumbo: ThemeValue;
}

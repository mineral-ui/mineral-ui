/* @flow */
import { LABEL_POSITION, SIZE, TYPE } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

type LabelPosition = keyof typeof LABEL_POSITION;
type Size = keyof typeof SIZE;
type Type = keyof typeof TYPE;

export interface ChoiceProps {
  checked?: boolean;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  iconChecked: React.ReactElement<any>;
  inputRef?: (node: HTMLInputElement | null | undefined) => void;
  invalid?: boolean;
  justify?: boolean;
  label: string | React.ReactElement<any>;
  labelPosition?: LabelPosition;
  name?: string;
  onChange?: (event: React.SyntheticEvent) => void;
  required?: boolean;
  rootProps?: object;
  size?: Size;
  type: Type;
  value?: string;
}

export interface ChoiceDefaultProps {
  labelPosition: LabelPosition;
  size: Size;
}

export interface ChoiceControlStyleProps
  extends Pick<ChoiceProps, 'disabled' | 'size'> {}

export interface ChoiceTextStyleProps
  extends Pick<
    ChoiceProps,
    'disabled' | 'hideLabel' | 'justify' | 'labelPosition' | 'size'
  > {}

export interface ChoiceGroupProps {
  checked?: string | Array<string>;
  children?: React.ReactElement<any> | React.ReactElement<any>[];
  data?: Array<{ label: string | React.ReactElement<any>; value: string }>;
  defaultChecked?: string | Array<string>;
  inline?: boolean;
  input?: React.ComponentType;
  invalid?: boolean;
  name: string;
  onChange?: (event: React.SyntheticEvent) => void;
  required?: boolean;
  role?: string;
  rootProps?: object;
  size?: Size;
  type: Type;
}

export interface ChoiceGroupStyleProps
  extends Pick<ChoiceGroupProps, 'inline' | 'size'> {}

export interface ChoiceGroupDefaultProps {
  role: string;
  size: Size;
}

export type ChoiceThemeFn = ComponentThemeFn<ChoiceTheme>;
export type ChoiceTheme = ComponentTheme<ChoiceThemeKeys>;
interface ChoiceThemeKeys {
  ChoiceControl_backgroundColor: ThemeValue;
  ChoiceControl_backgroundColor_checked: ThemeValue;
  ChoiceControl_backgroundColor_checkedHover: ThemeValue;
  ChoiceControl_borderColor: ThemeValue;
  ChoiceControl_borderColor_hover: ThemeValue;
  ChoiceControl_borderColor_checked: ThemeValue;
  ChoiceControl_borderColor_checkedHover: ThemeValue;
  ChoiceControl_borderRadius: ThemeValue;
  ChoiceControl_boxShadow_focus: ThemeValue;
  ChoiceControl_size: ThemeValue;
  ChoiceControl_size_jumbo: ThemeValue;
  ChoiceText_color: ThemeValue;
  ChoiceText_fontSize: ThemeValue;
  ChoiceText_fontSize_small: ThemeValue;
  ChoiceText_marginHorizontal: ThemeValue;
}

export type ChoiceGroupThemeFn = ComponentThemeFn<ChoiceGroupTheme>;
export type ChoiceGroupTheme = ComponentTheme<ChoiceGroupThemeKeys>;
interface ChoiceGroupThemeKeys {
  ChoiceGroupControl_marginHorizontal_inline: ThemeValue;
  ChoiceGroupControl_marginVertical_stacked: ThemeValue;
  ChoiceGroupControl_marginVertical_stackedJumbo: ThemeValue;
}

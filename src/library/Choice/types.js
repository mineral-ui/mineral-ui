/* @flow */
import { LABEL_POSITION, SIZE, TYPE } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type LabelPosition = $Keys<typeof LABEL_POSITION>;
type Size = $Keys<typeof SIZE>;
type Type = $Keys<typeof TYPE>;

export type ChoiceProps = {
  checked?: boolean,
  className?: string,
  labelPosition?: LabelPosition,
  defaultChecked?: boolean,
  disabled?: boolean,
  justify?: boolean,
  iconChecked: React$Element<*>,
  inputRef?: (node: ?HTMLInputElement) => void,
  rootProps?: Object,
  hideLabel?: boolean,
  invalid?: boolean,
  label: string | React$Element<*>,
  name?: string,
  onChange?: (event: SyntheticInputEvent<>) => void,
  required?: boolean,
  size?: Size,
  type: Type,
  value?: string
};

export type ChoiceDefaultProps = {
  labelPosition: LabelPosition,
  size: Size
};

export type ChoiceGroupProps = {
  checked?: string | Array<string>,
  children?: React$Node,
  data?: Array<{ label: string | React$Element<*>, value: string }>,
  defaultChecked?: string | Array<string>,
  inline?: boolean,
  input?: React$ComponentType<*>,
  invalid?: boolean,
  name: string,
  onChange?: (event: SyntheticEvent<>) => void,
  required?: boolean,
  role?: string,
  rootProps?: Object,
  size?: Size,
  type: Type
};

export type ChoiceGroupDefaultProps = {
  role: string,
  size: Size
};

export type ChoiceThemeFn = ComponentThemeFn<ChoiceTheme>;
export type ChoiceTheme = ComponentTheme<ChoiceThemeKeys>;
type ChoiceThemeKeys = {|
  ChoiceControl_backgroundColor: ThemeValue,
  ChoiceControl_backgroundColor_checked: ThemeValue,
  ChoiceControl_backgroundColor_checkedHover: ThemeValue,
  ChoiceControl_borderColor: ThemeValue,
  ChoiceControl_borderColor_hover: ThemeValue,
  ChoiceControl_borderColor_checked: ThemeValue,
  ChoiceControl_borderColor_checkedHover: ThemeValue,
  ChoiceControl_borderRadius: ThemeValue,
  ChoiceControl_boxShadow_focus: ThemeValue,
  ChoiceControl_size: ThemeValue,
  ChoiceControl_size_jumbo: ThemeValue,
  ChoiceText_color: ThemeValue,
  ChoiceText_fontSize: ThemeValue,
  ChoiceText_fontSize_small: ThemeValue,
  ChoiceText_marginHorizontal: ThemeValue
|};

export type ChoiceGroupThemeFn = ComponentThemeFn<ChoiceGroupTheme>;
export type ChoiceGroupTheme = ComponentTheme<ChoiceGroupThemeKeys>;
type ChoiceGroupThemeKeys = {|
  ChoiceGroupControl_marginHorizontal_inline: ThemeValue,
  ChoiceGroupControl_marginVertical_stacked: ThemeValue,
  ChoiceGroupControl_marginVertical_stackedJumbo: ThemeValue
|};

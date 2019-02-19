/* @flow */
import { MODE, SIZE, VARIANT } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

export interface ButtonGroupProps {
  'aria-label': string;
  checked?: number | Array<number>;
  children: React.ReactElement<any> | React.ReactElement<any>[];
  defaultChecked?: number | Array<number>;
  disabled?: boolean;
  fullWidth?: boolean;
  mode?: keyof typeof MODE;
  onChange?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  size?: keyof typeof SIZE;
  variant?: keyof typeof VARIANT;
}

export interface ButtonGroupStyledProps
  extends Pick<ButtonGroupProps, 'fullWidth' | 'variant'> {}

export interface ButtonGroupState {
  checked: Set<number>;
}

export type ButtonGroupThemeFn = ComponentThemeFn<ButtonGroupTheme>;
export type ButtonGroupTheme = ComponentTheme<ButtonGroupThemeKeys>;
interface ButtonGroupThemeKeys {
  ButtonGroupButton_backgroundColor_checkedDisabled: ThemeValue;
  ButtonGroupButton_border_disabled: ThemeValue;
  ButtonGroupButton_borderColor_active: ThemeValue;
  ButtonGroupButton_borderColor_hover: ThemeValue;
  ButtonGroupButton_borderStartColor: ThemeValue;
  ButtonGroupButton_borderStartColor_checked: ThemeValue;
  ButtonGroupButton_color_checkedDisabled: ThemeValue;
}

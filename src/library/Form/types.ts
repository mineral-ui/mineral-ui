/* @flow */
import { VARIANT } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

export interface FormFieldProps {
  caption?: string | React.ReactElement<any>;
  children?: React.ReactNode;
  className?: string;
  hideLabel?: boolean;
  id?: string;
  input?: React.ComponentType;
  rootProps?: object;
  label: string | React.ReactElement<any>;
  required?: boolean;
  requiredText?: string | React.ReactElement<any>;
  secondaryText?: string | React.ReactElement<any>;
  variant?: keyof typeof VARIANT;
}

export interface FormFieldStyleProps extends FormFieldProps {
  isGroup: boolean;
}

export interface FormFieldDefaultProps {
  requiredText: string | React.ReactElement<any>;
}

export type FormFieldDividerProps = object;

export interface FormFieldsetProps {
  children?: React.ReactNode;
  disabled?: boolean;
  legend?: string | React.ReactElement<any>;
}

export type FormFieldThemeFn = ComponentThemeFn<FormFieldTheme>;
export type FormFieldTheme = ComponentTheme<FormFieldThemeKeys>;
interface FormFieldThemeKeys {
  FormFieldCaption_color: ThemeValue;
  FormFieldCaption_fontSize: ThemeValue;
  FormFieldCaption_marginTop: ThemeValue;
  FormFieldCaption_marginTop_isGroup: ThemeValue;
  FormFieldLabel_color: ThemeValue;
  FormFieldLabel_fontSize: ThemeValue;
  FormFieldLabel_fontWeight: ThemeValue;
  FormFieldLabel_marginBottom: ThemeValue;
  FormFieldSecondaryText_fontSize: ThemeValue;
  FormFieldSecondaryText_color: ThemeValue;
  FormFieldSecondaryText_color_required: ThemeValue;
  FormFieldSecondaryText_fontWeight: ThemeValue;
}

export type FormFieldDividerThemeFn = ComponentThemeFn<FormFieldDividerTheme>;
export type FormFieldDividerTheme = ComponentTheme<FormFieldDividerThemeKeys>;
interface FormFieldDividerThemeKeys {
  FormFieldDivider_borderColor: ThemeValue;
  FormFieldDivider_borderWidth: ThemeValue;
  FormFieldDivider_margin: ThemeValue;
}

export type FormFieldsetThemeFn = ComponentThemeFn<FormFieldsetTheme>;
export type FormFieldsetTheme = ComponentTheme<FormFieldsetThemeKeys>;
interface FormFieldsetThemeKeys {
  FormFieldset_borderColor: ThemeValue;
  FormFieldsetLegend_color: ThemeValue;
  FormFieldsetLegend_fontSize: ThemeValue;
  FormFieldsetLegend_fontWeight: ThemeValue;
}

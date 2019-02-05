/* @flow */
import { VARIANT } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type FormFieldProps = {
  caption?: string | React$Element<*>,
  children?: React$Node,
  className?: string,
  hideLabel?: boolean,
  id?: string,
  input?: React$ComponentType<*>,
  rootProps?: Object,
  label: string | React$Element<*>,
  required?: boolean,
  requiredText?: string | React$Element<*>,
  secondaryText?: string | React$Element<*>,
  variant?: $Keys<typeof VARIANT>
};

export type FormFieldDefaultProps = {
  requiredText: string | React$Element<*>
};

export type FormFieldDividerProps = Object;

export type FormFieldsetProps = {
  children?: React$Node,
  disabled?: boolean,
  legend?: string | React$Element<*>
};

export type FormFieldThemeFn = ComponentThemeFn<FormFieldTheme>;
export type FormFieldTheme = ComponentTheme<FormFieldThemeKeys>;
type FormFieldThemeKeys = {|
  FormFieldCaption_color: ThemeValue,
  FormFieldCaption_fontSize: ThemeValue,
  FormFieldCaption_marginTop: ThemeValue,
  FormFieldCaption_marginTop_isGroup: ThemeValue,
  FormFieldLabel_color: ThemeValue,
  FormFieldLabel_fontSize: ThemeValue,
  FormFieldLabel_fontWeight: ThemeValue,
  FormFieldLabel_marginBottom: ThemeValue,
  FormFieldSecondaryText_fontSize: ThemeValue,
  FormFieldSecondaryText_color: ThemeValue,
  FormFieldSecondaryText_color_required: ThemeValue,
  FormFieldSecondaryText_fontWeight: ThemeValue
|};

export type FormFieldDividerThemeFn = ComponentThemeFn<FormFieldDividerTheme>;
export type FormFieldDividerTheme = ComponentTheme<FormFieldDividerThemeKeys>;
type FormFieldDividerThemeKeys = {|
  FormFieldDivider_borderColor: ThemeValue,
  FormFieldDivider_borderWidth: ThemeValue,
  FormFieldDivider_margin: ThemeValue
|};

export type FormFieldsetThemeFn = ComponentThemeFn<FormFieldsetTheme>;
export type FormFieldsetTheme = ComponentTheme<FormFieldsetThemeKeys>;
type FormFieldsetThemeKeys = {|
  FormFieldset_borderColor: ThemeValue,
  FormFieldsetLegend_color: ThemeValue,
  FormFieldsetLegend_fontSize: ThemeValue,
  FormFieldsetLegend_fontWeight: ThemeValue
|};

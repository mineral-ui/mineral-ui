/* @flow */
import { SIZE } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';
import { FauxControlProps } from '../FauxControl/types';

type Size = keyof typeof SIZE;

export interface TextAreaProps extends FauxControlProps {
  autoSize?: boolean;
  className?: string;
  defaultValue?: string;
  inputRef?: (node: React.Component | null | undefined) => void;
  rootProps?: object;
  invalid?: boolean;
  onInput?: (event: React.SyntheticEvent) => void;
  onChange?: (event: React.SyntheticEvent) => void;
  required?: boolean;
  resizeable?: boolean;
  rows?: number;
  value?: string;
}

export interface TextAreaDefaultProps {
  size: Size;
}

export interface TextAreaInputStyleProps
  extends Pick<TextAreaProps, 'resizeable' | 'size'> {}

export type TextAreaThemeFn = ComponentThemeFn<TextAreaTheme>;
export type TextAreaTheme = ComponentTheme<TextAreaThemeKeys>;
interface TextAreaThemeKeys {
  TextArea_backgroundColor: ThemeValue;
  TextArea_borderColor: ThemeValue;
  TextArea_borderColor_active: ThemeValue;
  TextArea_borderColor_focus: ThemeValue;
  TextArea_borderColor_hover: ThemeValue;
  TextArea_borderRadius: ThemeValue;
  TextArea_borderWidth: ThemeValue;
  TextArea_boxShadow_active: ThemeValue;
  TextArea_boxShadow_focus: ThemeValue;
  TextArea_color: ThemeValue;
  TextArea_color_placeholder: ThemeValue;
  TextArea_color_readOnly: ThemeValue;
  TextArea_fontSize: ThemeValue;
  TextArea_fontSize_small: ThemeValue;
  TextArea_paddingHorizontal: ThemeValue;
  TextArea_paddingHorizontal_small: ThemeValue;
  TextArea_paddingVertical_jumbo: ThemeValue;
  TextArea_paddingVertical_large: ThemeValue;
  TextArea_paddingVertical_medium: ThemeValue;
  TextArea_paddingVertical_small: ThemeValue;
  TextAreaIcon_marginHorizontal: ThemeValue;
}

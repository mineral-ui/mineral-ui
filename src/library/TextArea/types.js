/* @flow */
import { SIZE, VARIANT } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type Size = $Keys<typeof SIZE>;

export type TextAreaProps = {
  autoSize?: boolean,
  className?: string,
  defaultValue?: string,
  disabled?: boolean,
  inputRef?: (node: ?React$Component<*, *>) => void,
  rootProps?: Object,
  invalid?: boolean,
  onInput?: (event: SyntheticEvent<>) => void,
  onChange?: (event: SyntheticEvent<>) => void,
  readOnly?: boolean,
  required?: boolean,
  resizeable?: boolean,
  rows?: number,
  size?: Size,
  value?: string,
  variant?: $Keys<typeof VARIANT>
};

export type TextAreaDefaultProps = {
  size: Size
};

export type TextAreaThemeFn = ComponentThemeFn<TextAreaTheme>;
export type TextAreaTheme = ComponentTheme<TextAreaThemeKeys>;
type TextAreaThemeKeys = {|
  TextArea_backgroundColor: ThemeValue,
  TextArea_borderColor: ThemeValue,
  TextArea_borderColor_active: ThemeValue,
  TextArea_borderColor_focus: ThemeValue,
  TextArea_borderColor_hover: ThemeValue,
  TextArea_borderRadius: ThemeValue,
  TextArea_borderWidth: ThemeValue,
  TextArea_boxShadow_active: ThemeValue,
  TextArea_boxShadow_focus: ThemeValue,
  TextArea_color: ThemeValue,
  TextArea_color_placeholder: ThemeValue,
  TextArea_color_readOnly: ThemeValue,
  TextArea_fontSize: ThemeValue,
  TextArea_fontSize_small: ThemeValue,
  TextArea_paddingHorizontal: ThemeValue,
  TextArea_paddingHorizontal_small: ThemeValue,
  TextArea_paddingVertical_jumbo: ThemeValue,
  TextArea_paddingVertical_large: ThemeValue,
  TextArea_paddingVertical_medium: ThemeValue,
  TextArea_paddingVertical_small: ThemeValue,
  TextAreaIcon_marginHorizontal: ThemeValue
|};

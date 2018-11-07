/* @flow */
import { SIZE, VARIANT } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type FauxControlProps = {
  afterItems?: React$Node,
  beforeItems?: React$Node,
  children?: React$Node,
  control: React$ComponentType<*>,
  controlProps?: Object,
  disabled?: boolean,
  fauxControlRef?: (node: ?React$Component<*, *>) => void,
  iconStart?: React$Element<*>,
  iconEnd?: React$Element<*>,
  prefix?: React$Node,
  readOnly?: boolean,
  size?: $Keys<typeof SIZE>,
  suffix?: React$Node,
  variant?: $Keys<typeof VARIANT>
};

export type VariantIcons = {
  [key: $Keys<typeof VARIANT>]: React$Element<*>
};

export type FauxControlThemeFn = ComponentThemeFn<FauxControlTheme>;
export type FauxControlTheme = ComponentTheme<FauxControlThemeKeys>;
type FauxControlThemeKeys = {|
  FauxControl_backgroundColor: ThemeValue,
  FauxControl_borderColor: ThemeValue,
  FauxControl_borderColor_active: ThemeValue,
  FauxControl_borderColor_focus: ThemeValue,
  FauxControl_borderColor_hover: ThemeValue,
  FauxControl_borderRadius: ThemeValue,
  FauxControl_borderWidth: ThemeValue,
  FauxControl_boxShadow_active: ThemeValue,
  FauxControl_boxShadow_focus: ThemeValue,
  FauxControl_color: ThemeValue,
  FauxControl_color_placeholder: ThemeValue,
  FauxControl_color_readOnly: ThemeValue,
  FauxControl_fontSize: ThemeValue,
  FauxControl_fontSize_small: ThemeValue,
  FauxControl_paddingHorizontal: ThemeValue,
  FauxControl_paddingHorizontal_small: ThemeValue,
  FauxControlIcon_marginHorizontal: ThemeValue
|};

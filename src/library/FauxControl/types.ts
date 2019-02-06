/* @flow */
import { SIZE, VARIANT } from './constants';

import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type FauxControlProps = {
  afterItems?: React.ReactNode,
  beforeItems?: React.ReactNode,
  children?: React.ReactNode,
  control: React.ComponentType,
  controlProps?: Object,
  disabled?: boolean,
  fauxControlRef?: (node: ?React$Component<*, *>) => void,
  iconStart?: React.ReactElement<any>,
  iconEnd?: React.ReactElement<any>,
  prefix?: React.ReactNode,
  readOnly?: boolean,
  size?: keyof typeof SIZE,
  suffix?: React.ReactNode,
  variant?: keyof typeof VARIANT
};

export type VariantIcons = {
  [key: keyof typeof VARIANT]: React.ReactElement<any>
};

export type FauxControlThemeFn = ComponentThemeFn<FauxControlTheme>;
export type FauxControlTheme = ComponentTheme<FauxControlThemeKeys>;
type FauxControlThemeKeys = {
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
};

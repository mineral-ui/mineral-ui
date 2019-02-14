/* @flow */
import { SIZE, VARIANT } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

type Size = keyof typeof SIZE;
type Variant = keyof typeof VARIANT;

export interface FauxControlProps {
  afterItems?: React.ReactNode;
  beforeItems?: React.ReactNode;
  children?: React.ReactNode;
  control: React.ComponentType;
  controlProps?: object;
  disabled?: boolean;
  fauxControlRef?: (node: React.Component | null | undefined) => void;
  iconStart?: React.ReactElement<any>;
  iconEnd?: React.ReactElement<any>;
  prefix?: React.ReactNode;
  readOnly?: boolean;
  size?: Size;
  suffix?: React.ReactNode;
  variant?: Variant;
}

export type FauxControlStyleProps = Pick<
  FauxControlProps,
  'disabled' | 'variant'
>;

export type FauxControlPrefixStyleProps = Pick<
  FauxControlProps,
  'iconStart' | 'size'
>;

export type FauxControlSuffixStyleProps = Pick<
  FauxControlProps,
  'iconEnd' | 'size' | 'variant'
>;

export type FauxControlUnderlayStyleProps = Pick<
  FauxControlProps,
  'disabled' | 'readOnly' | 'variant'
>;

export type FauxControlControlStyleProps = Pick<
  FauxControlProps,
  | 'disabled'
  | 'iconEnd'
  | 'iconStart'
  | 'readOnly'
  | 'size' // Doesn't match DOM expectation, but no error thrown :shrug:
  | 'suffix'
  | 'variant'
> & {
  controlPropsIn?: object;
  controlSize?: Size;
  hasPlaceholder?: boolean;
  prefix?: string; // Overwrite FauxControlProps to match DOM expectation
};

export type VariantIcons = { [K in Variant]: React.ReactElement<any> };

export type FauxControlThemeFn = ComponentThemeFn<FauxControlTheme>;
export type FauxControlTheme = ComponentTheme<FauxControlThemeKeys>;
interface FauxControlThemeKeys {
  FauxControl_backgroundColor: ThemeValue;
  FauxControl_borderColor: ThemeValue;
  FauxControl_borderColor_active: ThemeValue;
  FauxControl_borderColor_focus: ThemeValue;
  FauxControl_borderColor_hover: ThemeValue;
  FauxControl_borderRadius: ThemeValue;
  FauxControl_borderWidth: ThemeValue;
  FauxControl_boxShadow_active: ThemeValue;
  FauxControl_boxShadow_focus: ThemeValue;
  FauxControl_color: ThemeValue;
  FauxControl_color_placeholder: ThemeValue;
  FauxControl_color_readOnly: ThemeValue;
  FauxControl_fontSize: ThemeValue;
  FauxControl_fontSize_small: ThemeValue;
  FauxControl_paddingHorizontal: ThemeValue;
  FauxControl_paddingHorizontal_small: ThemeValue;
  FauxControlIcon_marginHorizontal: ThemeValue;
}

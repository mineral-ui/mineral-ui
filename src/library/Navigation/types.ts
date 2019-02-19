/* @flow */
import { ALIGN, INTERNAL_TYPE, PREFIX, TYPE } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';
import { MenuItemRenderFn, MenuItemType } from '../Menu/types';

// [1] These purposefully reference enum values instead of keys
type Align = keyof typeof ALIGN;
interface BaseNavigationProps {
  align?: Align;
  children?: React.ReactElement<any> | React.ReactElement<any>[];
  itemAs?: ItemElement;
  items?: NavigationItems;
  maxItemWidth?: number | string;
  messages?: Messages;
  onChange?: (
    selectedIndex: number,
    event: React.SyntheticEvent<HTMLAnchorElement>
  ) => void;
  overflowAtIndex?: number;
  selectedIndex?: number;
}
type InternalType = INTERNAL_TYPE[keyof INTERNAL_TYPE]; // [1]
type ItemElement = React.ReactElement<any> | string;
export type NavigationItems = Array<NavigationItem>;
interface Messages {
  moreLabel: string;
  moreText: string;
}
type Prefix = keyof typeof PREFIX;
export interface PrefixAndType {
  prefix: Prefix;
  type: InternalType;
}
type Type = keyof typeof TYPE;

export type AnchorEvent = React.SyntheticEvent<HTMLAnchorElement>;

export type GetDropdownData = (props: {
  data: NavigationItems;
  disabled?: boolean;
  onClick: (event: AnchorEvent, selectedIndex: number) => void;
  startingIndex: number;
}) => Array<MenuItemType>;

export type GetDropdownItem = (itemAs: ItemElement) => MenuItemRenderFn;

export type NavigationItem = MenuItemType & {
  as?: React.ReactElement<any>;
  child?: React.ReactElement<any>;
  icon?: React.ReactElement<any>;
  index?: number;
  maxWidth?: number | string;
  selected?: boolean;
};

export interface NavItemProps {
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactElement<any>;
  index?: number;
  maxWidth?: number | string;
  minimal?: boolean;
  prefix?: Prefix;
  selected?: boolean;
  type?: InternalType;
}

export interface NavItemStyleProps
  extends Pick<
      NavItemProps,
      'disabled' | 'maxWidth' | 'prefix' | 'selected' | 'type'
    >,
    Pick<BaseNavigationProps, 'align'> {}

export interface NavOverflowMenuProps {
  data: NavigationItems;
  onClick: (event: AnchorEvent, selectedIndex: number) => void;
  index: number;
  itemAs: ItemElement;
  messages: Messages;
  prefix: Prefix;
  type: InternalType;
}

export interface NavOverflowMenuDefaultProps {
  itemAs: string;
}

export interface NavigationProps extends BaseNavigationProps {
  minimal?: boolean;
  secondary?: boolean;
  type?: Type;
}

export interface NavigationDefaultProps {
  itemAs: string;
  maxItemWidth: string;
  messages: Messages;
}

export interface NavigationStyleProps
  extends Pick<BaseNavigationProps, 'align'>,
    PrefixAndType {}

export interface PrimaryNavProps extends BaseNavigationProps {
  minimal?: boolean;
}

export interface PrimaryNavDefaultProps extends NavigationDefaultProps {
  align: Align;
}

export interface SecondaryNavProps extends BaseNavigationProps {
  type?: Type;
}

export interface SecondaryNavDefaultProps extends NavigationDefaultProps {
  align: Align;
  type: Type;
}

export type PrimaryNavItemThemeFn = ComponentThemeFn<PrimaryNavItemTheme>;
export type PrimaryNavItemTheme = ComponentTheme<PrimaryNavItemThemeKeys>;
interface PrimaryNavItemThemeKeys {
  PrimaryNavItem_paddingHorizontal: ThemeValue;
  PrimaryNavItemIcon_color: ThemeValue;
  PrimaryNavItem_backgroundColor: ThemeValue;
  PrimaryNavItem_backgroundColor_active: ThemeValue;
  PrimaryNavItem_backgroundColor_focus: ThemeValue;
  PrimaryNavItem_backgroundColor_hover: ThemeValue;
  PrimaryNavItem_backgroundColor_selected: ThemeValue;
  PrimaryNavItem_borderColor: ThemeValue;
  PrimaryNavItem_borderColor_active: ThemeValue;
  PrimaryNavItem_borderColor_focus: ThemeValue;
  PrimaryNavItem_borderColor_hover: ThemeValue;
  PrimaryNavItem_borderColor_selected: ThemeValue;
  PrimaryNavItem_color: ThemeValue;
  PrimaryNavItem_color_disabled: ThemeValue;
  PrimaryNavItem_color_hover: ThemeValue;
  PrimaryNavItem_color_selected: ThemeValue;
  PrimaryNavItem_backgroundColor_minimal: ThemeValue;
  PrimaryNavItem_backgroundColor_minimal_active: ThemeValue;
  PrimaryNavItem_backgroundColor_minimal_focus: ThemeValue;
  PrimaryNavItem_backgroundColor_minimal_hover: ThemeValue;
  PrimaryNavItem_backgroundColor_minimal_selected: ThemeValue;
  PrimaryNavItem_borderColor_minimal: ThemeValue;
  PrimaryNavItem_borderColor_minimal_active: ThemeValue;
  PrimaryNavItem_borderColor_minimal_focus: ThemeValue;
  PrimaryNavItem_borderColor_minimal_hover: ThemeValue;
  PrimaryNavItem_borderColor_minimal_selected: ThemeValue;
  PrimaryNavItem_color_minimal: ThemeValue;
  PrimaryNavItem_color_minimal_hover: ThemeValue;
  PrimaryNavItem_color_minimal_selected: ThemeValue;
}

export type SecondaryNavItemThemeFn = ComponentThemeFn<SecondaryNavItemTheme>;
export type SecondaryNavItemTheme = ComponentTheme<SecondaryNavItemThemeKeys>;
interface SecondaryNavItemThemeKeys {
  SecondaryNavItem_paddingHorizontal: ThemeValue;
  SecondaryNavItemIcon_color: ThemeValue;
  SecondaryNavItem_backgroundColor_pills: ThemeValue;
  SecondaryNavItem_backgroundColor_pills_active: ThemeValue;
  SecondaryNavItem_backgroundColor_pills_focus: ThemeValue;
  SecondaryNavItem_backgroundColor_pills_hover: ThemeValue;
  SecondaryNavItem_backgroundColor_pills_selected: ThemeValue;
  SecondaryNavItem_borderColor_pills: ThemeValue;
  SecondaryNavItem_borderColor_pills_active: ThemeValue;
  SecondaryNavItem_borderColor_pills_focus: ThemeValue;
  SecondaryNavItem_borderColor_pills_hover: ThemeValue;
  SecondaryNavItem_borderColor_pills_selected: ThemeValue;
  SecondaryNavItem_color_pills: ThemeValue;
  SecondaryNavItem_color_pills_hover: ThemeValue;
  SecondaryNavItem_color_pills_selected: ThemeValue;
  SecondaryNavItem_backgroundColor_tabs: ThemeValue;
  SecondaryNavItem_backgroundColor_tabs_active: ThemeValue;
  SecondaryNavItem_backgroundColor_tabs_focus: ThemeValue;
  SecondaryNavItem_backgroundColor_tabs_hover: ThemeValue;
  SecondaryNavItem_backgroundColor_tabs_selected: ThemeValue;
  SecondaryNavItem_borderColor_tabs: ThemeValue;
  SecondaryNavItem_borderColor_tabs_active: ThemeValue;
  SecondaryNavItem_borderColor_tabs_focus: ThemeValue;
  SecondaryNavItem_borderColor_tabs_hover: ThemeValue;
  SecondaryNavItem_borderColor_tabs_selected: ThemeValue;
  SecondaryNavItem_color_tabs: ThemeValue;
  SecondaryNavItem_color_tabs_hover: ThemeValue;
  SecondaryNavItem_color_tabs_selected: ThemeValue;
}

export type NavItemThemeFn = ComponentThemeFn<NavItemTheme>;
export type NavItemTheme = ComponentTheme<NavItemThemeKeys>;
type NavItemThemeKeys = PrimaryNavItemThemeKeys & SecondaryNavItemThemeKeys;

export type PrimaryNavThemeFn = ComponentThemeFn<PrimaryNavTheme>;
export type PrimaryNavTheme = ComponentTheme<PrimaryNavThemeKeys>;
interface PrimaryNavThemeKeys {
  PrimaryNav_backgroundColor: ThemeValue;
  PrimaryNav_backgroundColor_minimal: ThemeValue;
  PrimaryNav_gutter: ThemeValue;
  PrimaryNav_paddingHorizontal: ThemeValue;
  PrimaryNav_paddingVertical: ThemeValue;
}

export type SecondaryNavThemeFn = ComponentThemeFn<SecondaryNavTheme>;
export type SecondaryNavTheme = ComponentTheme<SecondaryNavThemeKeys>;
interface SecondaryNavThemeKeys {
  SecondaryNav_backgroundColor_pills: ThemeValue;
  SecondaryNav_backgroundColor_tabs: ThemeValue;
  SecondaryNav_border: ThemeValue;
  SecondaryNav_gutter: ThemeValue;
  SecondaryNav_paddingHorizontal: ThemeValue;
  SecondaryNav_paddingVertical: ThemeValue;
}

export type NavigationThemeFn = ComponentThemeFn<NavigationTheme>;
export type NavigationTheme = ComponentTheme<NavigationThemeKeys>;
type NavigationThemeKeys = PrimaryNavThemeKeys & SecondaryNavThemeKeys;

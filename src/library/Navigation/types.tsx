/* @flow */
import { ALIGN, INTERNAL_TYPE, PREFIX, TYPE } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';
import type { MenuItemRenderFn, MenuItemType } from '../Menu/types';

const FROZEN_INTERNAL_TYPE = Object.freeze(INTERNAL_TYPE);
const FROZEN_PREFIX = Object.freeze(PREFIX);

// [1] These purposefully reference $Values instead of $Keys
type Align = $Keys<typeof ALIGN>;
type BaseNavigationProps = {
  align?: Align,
  children?: React$Node,
  itemAs?: ItemElement,
  items?: NavigationItems,
  maxItemWidth?: number | string,
  messages?: Messages,
  onChange?: (
    selectedIndex: number,
    event: SyntheticEvent<HTMLAnchorElement>
  ) => void,
  overflowAtIndex?: number,
  selectedIndex?: number
};
type InternalType = $Values<typeof FROZEN_INTERNAL_TYPE>; // [1]
type ItemElement = React$Element<*> | string;
export type NavigationItems = Array<NavigationItem>;
type Messages = {
  moreLabel: string,
  moreText: string
};
type Prefix = $Values<typeof FROZEN_PREFIX>; // [1]
export type PrefixAndType = { prefix: Prefix, type: InternalType };
type Type = $Keys<typeof TYPE>;

export type AnchorEvent = SyntheticEvent<HTMLAnchorElement>;

export type GetDropdownData = ({
  data: NavigationItems,
  disabled?: boolean,
  onClick: (event: AnchorEvent, selectedIndex: number) => void,
  startingIndex: number
}) => Array<MenuItemType>;

export type GetDropdownItem = (itemAs: ItemElement) => MenuItemRenderFn;

export type NavigationItem = MenuItemType & {
  as?: React$Element<*>,
  child?: React$Element<*>,
  icon?: React$Element<*>,
  index?: number,
  maxWidth?: number | string,
  selected?: boolean
};

export type NavItemProps = {
  children?: React$Node,
  disabled?: boolean,
  icon?: React$Element<*>,
  index?: number,
  maxWidth?: number | string,
  minimal?: boolean,
  prefix?: Prefix,
  selected?: boolean,
  type?: InternalType
};

export type NavOverflowMenuProps = {
  data: NavigationItems,
  onClick: (event: AnchorEvent, selectedIndex: number) => void,
  index: number,
  itemAs: ItemElement,
  messages: Messages,
  prefix: Prefix,
  type: InternalType
};

export type NavOverflowMenuDefaultProps = {
  itemAs: string
};

export type NavigationProps = BaseNavigationProps & {
  minimal?: boolean,
  secondary?: boolean,
  type?: Type
};

export type NavigationDefaultProps = {
  itemAs: string,
  maxItemWidth: string,
  messages: Messages
};

export type PrimaryNavProps = BaseNavigationProps & {
  minimal?: boolean
};

export type PrimaryNavDefaultProps = NavigationDefaultProps & {
  align: Align
};

export type SecondaryNavProps = BaseNavigationProps & {
  type?: Type
};

export type SecondaryNavDefaultProps = NavigationDefaultProps & {
  align: Align,
  type: Type
};

export type PrimaryNavItemThemeFn = ComponentThemeFn<PrimaryNavItemTheme>;
export type PrimaryNavItemTheme = ComponentTheme<PrimaryNavItemThemeKeys>;
type PrimaryNavItemThemeKeys = {|
  PrimaryNavItem_paddingHorizontal: ThemeValue,
  PrimaryNavItemIcon_color: ThemeValue,
  PrimaryNavItem_backgroundColor: ThemeValue,
  PrimaryNavItem_backgroundColor_active: ThemeValue,
  PrimaryNavItem_backgroundColor_focus: ThemeValue,
  PrimaryNavItem_backgroundColor_hover: ThemeValue,
  PrimaryNavItem_backgroundColor_selected: ThemeValue,
  PrimaryNavItem_borderColor: ThemeValue,
  PrimaryNavItem_borderColor_active: ThemeValue,
  PrimaryNavItem_borderColor_focus: ThemeValue,
  PrimaryNavItem_borderColor_hover: ThemeValue,
  PrimaryNavItem_borderColor_selected: ThemeValue,
  PrimaryNavItem_color: ThemeValue,
  PrimaryNavItem_color_disabled: ThemeValue,
  PrimaryNavItem_color_hover: ThemeValue,
  PrimaryNavItem_color_selected: ThemeValue,
  PrimaryNavItem_backgroundColor_minimal: ThemeValue,
  PrimaryNavItem_backgroundColor_minimal_active: ThemeValue,
  PrimaryNavItem_backgroundColor_minimal_focus: ThemeValue,
  PrimaryNavItem_backgroundColor_minimal_hover: ThemeValue,
  PrimaryNavItem_backgroundColor_minimal_selected: ThemeValue,
  PrimaryNavItem_borderColor_minimal: ThemeValue,
  PrimaryNavItem_borderColor_minimal_active: ThemeValue,
  PrimaryNavItem_borderColor_minimal_focus: ThemeValue,
  PrimaryNavItem_borderColor_minimal_hover: ThemeValue,
  PrimaryNavItem_borderColor_minimal_selected: ThemeValue,
  PrimaryNavItem_color_minimal: ThemeValue,
  PrimaryNavItem_color_minimal_hover: ThemeValue,
  PrimaryNavItem_color_minimal_selected: ThemeValue
|};

export type SecondaryNavItemThemeFn = ComponentThemeFn<SecondaryNavItemTheme>;
export type SecondaryNavItemTheme = ComponentTheme<SecondaryNavItemThemeKeys>;
type SecondaryNavItemThemeKeys = {|
  SecondaryNavItem_paddingHorizontal: ThemeValue,
  SecondaryNavItemIcon_color: ThemeValue,
  SecondaryNavItem_backgroundColor_pills: ThemeValue,
  SecondaryNavItem_backgroundColor_pills_active: ThemeValue,
  SecondaryNavItem_backgroundColor_pills_focus: ThemeValue,
  SecondaryNavItem_backgroundColor_pills_hover: ThemeValue,
  SecondaryNavItem_backgroundColor_pills_selected: ThemeValue,
  SecondaryNavItem_borderColor_pills: ThemeValue,
  SecondaryNavItem_borderColor_pills_active: ThemeValue,
  SecondaryNavItem_borderColor_pills_focus: ThemeValue,
  SecondaryNavItem_borderColor_pills_hover: ThemeValue,
  SecondaryNavItem_borderColor_pills_selected: ThemeValue,
  SecondaryNavItem_color_pills: ThemeValue,
  SecondaryNavItem_color_pills_hover: ThemeValue,
  SecondaryNavItem_color_pills_selected: ThemeValue,
  SecondaryNavItem_backgroundColor_tabs: ThemeValue,
  SecondaryNavItem_backgroundColor_tabs_active: ThemeValue,
  SecondaryNavItem_backgroundColor_tabs_focus: ThemeValue,
  SecondaryNavItem_backgroundColor_tabs_hover: ThemeValue,
  SecondaryNavItem_backgroundColor_tabs_selected: ThemeValue,
  SecondaryNavItem_borderColor_tabs: ThemeValue,
  SecondaryNavItem_borderColor_tabs_active: ThemeValue,
  SecondaryNavItem_borderColor_tabs_focus: ThemeValue,
  SecondaryNavItem_borderColor_tabs_hover: ThemeValue,
  SecondaryNavItem_borderColor_tabs_selected: ThemeValue,
  SecondaryNavItem_color_tabs: ThemeValue,
  SecondaryNavItem_color_tabs_hover: ThemeValue,
  SecondaryNavItem_color_tabs_selected: ThemeValue
|};

export type NavItemThemeFn = ComponentThemeFn<NavItemTheme>;
export type NavItemTheme = ComponentTheme<NavItemThemeKeys>;
type NavItemThemeKeys = PrimaryNavItemThemeKeys & SecondaryNavItemThemeKeys;

export type PrimaryNavThemeFn = ComponentThemeFn<PrimaryNavTheme>;
export type PrimaryNavTheme = ComponentTheme<PrimaryNavThemeKeys>;
type PrimaryNavThemeKeys = {|
  PrimaryNav_backgroundColor: ThemeValue,
  PrimaryNav_backgroundColor_minimal: ThemeValue,
  PrimaryNav_gutter: ThemeValue,
  PrimaryNav_paddingHorizontal: ThemeValue,
  PrimaryNav_paddingVertical: ThemeValue
|};

export type SecondaryNavThemeFn = ComponentThemeFn<SecondaryNavTheme>;
export type SecondaryNavTheme = ComponentTheme<SecondaryNavThemeKeys>;
type SecondaryNavThemeKeys = {|
  SecondaryNav_backgroundColor_pills: ThemeValue,
  SecondaryNav_backgroundColor_tabs: ThemeValue,
  SecondaryNav_border: ThemeValue,
  SecondaryNav_gutter: ThemeValue,
  SecondaryNav_paddingHorizontal: ThemeValue,
  SecondaryNav_paddingVertical: ThemeValue
|};

export type NavigationThemeFn = ComponentThemeFn<NavigationTheme>;
export type NavigationTheme = ComponentTheme<NavigationThemeKeys>;
type NavigationThemeKeys = PrimaryNavThemeKeys & SecondaryNavThemeKeys;

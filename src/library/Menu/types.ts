/* @flow */
import { VARIANT } from './constants';

import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type MenuItemType = {
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  disabled?: boolean,
  divider?: boolean,
  group?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  render?: MenuRenderFn,
  secondaryText?: React.ReactNode,
  text?: React.ReactNode,
  title?: React.ReactNode,
  value?: string,
  variant?: $Keys<typeof VARIANT>
};
export type MenuItems = Array<MenuItemType>;

export type MenuPropGetter = (props?: Object) => Object;

export type MenuRenderFn = (props?: MenuRenderProps) => React.ReactNode;

type MenuRenderProps = {
  props: Object
};

export type MenuProps = {
  children?: React.ReactNode,
  data?: MenuItems,
  highlightedIndex?: number,
  item?: MenuRenderFn,
  itemKey?: string
};

export type MenuDividerProps = Object;

export type MenuGroupProps = {
  children?: React.ReactNode,
  title?: React.ReactNode
};

export type MenuItemProps = {
  children?: React.ReactNode,
  disabled?: boolean,
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  index?: number,
  isHighlighted?: boolean,
  item?: MenuItemType,
  onClick?: (event: SyntheticEvent<>) => void,
  render?: MenuItemRenderFn,
  secondaryText?: React.ReactNode,
  variant?: $Keys<typeof VARIANT>
};

export type MenuItemPropGetter = (props?: Object) => Object;

export type MenuItemRenderFn = (props?: MenuItemRenderProps) => React.ReactNode;

export type MenuItemRenderProps = {
  props: Object
};

export type MenuDividerThemeFn = ComponentThemeFn<MenuDividerTheme>;
export type MenuDividerTheme = ComponentTheme<MenuDividerThemeKeys>;
type MenuDividerThemeKeys = {|
  MenuDivider_borderColor: ThemeValue,
  MenuDivider_borderWidth: ThemeValue,
  MenuDivider_margin: ThemeValue
|};

export type MenuGroupThemeFn = ComponentThemeFn<MenuGroupTheme>;
export type MenuGroupTheme = ComponentTheme<MenuGroupThemeKeys>;
type MenuGroupThemeKeys = {|
  MenuGroupTitle_fontSize: ThemeValue,
  MenuGroupTitle_fontWeight: ThemeValue,
  MenuGroupTitle_marginTop: ThemeValue,
  MenuGroupTitle_paddingTop: ThemeValue,
  MenuGroupTitle_paddingBottom: ThemeValue
|};

export type MenuItemThemeFn = ComponentThemeFn<MenuItemTheme>;
export type MenuItemTheme = ComponentTheme<MenuItemThemeKeys>;
type MenuItemThemeKeys = {|
  MenuItem_backgroundColor_active: ThemeValue,
  MenuItem_backgroundColor_focus: ThemeValue,
  MenuItem_backgroundColor_hover: ThemeValue,
  MenuItem_backgroundColor_selected: ThemeValue,
  MenuItem_backgroundColor_selectedActive: ThemeValue,
  MenuItem_backgroundColor_selectedHover: ThemeValue,
  MenuItem_color: ThemeValue,
  MenuItem_fontWeight: ThemeValue,
  MenuItem_fontWeight_selected: ThemeValue,
  MenuItem_paddingHorizontal: ThemeValue,
  MenuItem_paddingVertical: ThemeValue,
  MenuItemContent_fontSize: ThemeValue,
  MenuItemIcon_color: ThemeValue,
  MenuItemIcon_margin: ThemeValue,
  MenuItemSecondaryText_color: ThemeValue,
  MenuItemSecondaryText_fontSize: ThemeValue
|};

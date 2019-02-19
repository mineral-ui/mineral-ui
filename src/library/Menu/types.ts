/* @flow */
import { VARIANT } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';
import { HTMLAttributes } from 'react';

export interface MenuItemType {
  iconEnd?: React.ReactElement<any>;
  iconStart?: React.ReactElement<any>;
  disabled?: boolean;
  divider?: boolean;
  group?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
  render?: MenuRenderFn;
  secondaryText?: React.ReactNode;
  text?: React.ReactNode;
  title?: React.ReactNode;
  value?: string;
  variant?: keyof typeof VARIANT;
}
export type MenuItems = Array<MenuItemType>;

export type MenuPropGetter<T = {}> = (
  props?: (Partial<T> & HTMLAttributes<any>) | null | undefined
) => T;

export type MenuRenderFn = (props?: MenuRenderProps) => React.ReactNode;

interface MenuRenderProps {
  props: object;
}

export interface MenuProps {
  children?: React.ReactNode;
  data?: MenuItems;
  highlightedIndex?: number;
  item?: MenuRenderFn;
  itemKey?: string;
}

export type MenuDividerProps = object;

export interface MenuGroupProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
}

export interface MenuItemProps {
  children?: React.ReactNode;
  disabled?: boolean;
  iconEnd?: React.ReactElement<any>;
  iconStart?: React.ReactElement<any>;
  index?: number;
  isHighlighted?: boolean;
  item?: MenuItemType;
  onClick?: (event: React.SyntheticEvent) => void;
  render?: MenuItemRenderFn;
  secondaryText?: React.ReactNode;
  variant?: keyof typeof VARIANT;
}

export type MenuItemPropGetter<T = {}> = (
  props?: (Partial<T> & HTMLAttributes<any>) | null | undefined
) => T;

export type MenuItemRenderFn = (props?: MenuItemRenderProps) => React.ReactNode;

export interface MenuItemRenderProps {
  props: object;
}

export type MenuDividerThemeFn = ComponentThemeFn<MenuDividerTheme>;
export type MenuDividerTheme = ComponentTheme<MenuDividerThemeKeys>;
interface MenuDividerThemeKeys {
  MenuDivider_borderColor: ThemeValue;
  MenuDivider_borderWidth: ThemeValue;
  MenuDivider_margin: ThemeValue;
}

export type MenuGroupThemeFn = ComponentThemeFn<MenuGroupTheme>;
export type MenuGroupTheme = ComponentTheme<MenuGroupThemeKeys>;
interface MenuGroupThemeKeys {
  MenuGroupTitle_fontSize: ThemeValue;
  MenuGroupTitle_fontWeight: ThemeValue;
  MenuGroupTitle_marginTop: ThemeValue;
  MenuGroupTitle_paddingTop: ThemeValue;
  MenuGroupTitle_paddingBottom: ThemeValue;
}

export type MenuItemThemeFn = ComponentThemeFn<MenuItemTheme>;
export type MenuItemTheme = ComponentTheme<MenuItemThemeKeys>;
interface MenuItemThemeKeys {
  MenuItem_backgroundColor_active: ThemeValue;
  MenuItem_backgroundColor_focus: ThemeValue;
  MenuItem_backgroundColor_hover: ThemeValue;
  MenuItem_backgroundColor_selected: ThemeValue;
  MenuItem_backgroundColor_selectedActive: ThemeValue;
  MenuItem_backgroundColor_selectedHover: ThemeValue;
  MenuItem_color: ThemeValue;
  MenuItem_fontWeight: ThemeValue;
  MenuItem_fontWeight_selected: ThemeValue;
  MenuItem_paddingHorizontal: ThemeValue;
  MenuItem_paddingVertical: ThemeValue;
  MenuItemContent_fontSize: ThemeValue;
  MenuItemIcon_color: ThemeValue;
  MenuItemIcon_margin: ThemeValue;
  MenuItemSecondaryText_color: ThemeValue;
  MenuItemSecondaryText_fontSize: ThemeValue;
}

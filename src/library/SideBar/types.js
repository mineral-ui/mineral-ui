/* @flow */
import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type SideBarProps = {
  children?: React$Node,
  inline?: boolean,
  usePortal?: boolean
};

export type SideBarPanelProps = {
  children?: React$Node,
  hasShadows?: boolean,
  isCollapsed?: boolean,
  isOpen?: boolean,
  width?: number
};

export type SideBarPanelAnimationCollapseProps = {
  children?: React$Node,
  isCollapsed?: boolean,
  theme: Object,
  width?: number
};

export type SideBarPanelAnimationSliderProps = {
  children?: React$Node,
  hasShadows?: boolean,
  isCollapsed?: boolean,
  isOpen?: boolean,
  theme: Object,
  width?: number
};

export type SideBarOverlayProps = {
  onClick?: void,
  show?: boolean,
  theme: Object
};

export type SideBarThemeFn = ComponentThemeFn<SideBarTheme>;
export type SideBarTheme = ComponentTheme<SideBarThemeKeys>;
type SideBarThemeKeys = {|
  SideBar_zIndex: ThemeValue
|};

export type SideBarPanelThemeFn = ComponentThemeFn<SideBarPanelTheme>;
export type SideBarPanelTheme = ComponentTheme<SideBarPanelThemeKeys>;
type SideBarPanelThemeKeys = {|
  SideBarPanel_backgroundColor: ThemeValue,
  SideBarPanel_transitionDuration: ThemeValue,
  SideBarPanel_width: ThemeValue,
  SideBarPanel_width_isCollapsed: ThemeValue,
  SideBarPanel_zIndex: ThemeValue
|};

export type SideBarOverlayThemeFn = ComponentThemeFn<SideBarOverlayTheme>;
export type SideBarOverlayTheme = ComponentTheme<SideBarOverlayThemeKeys>;
type SideBarOverlayThemeKeys = {|
  SideBarOverlay_backgroundColor: ThemeValue,
  SideBarOverlay_transitionDuration: ThemeValue,
  SideBarOverlay_zIndex: ThemeValue
|};

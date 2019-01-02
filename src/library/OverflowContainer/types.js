/* @flow */
import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type OverflowContainerProps = {
  children?: React$Node,
  containerRef?: (node: ?HTMLElement) => void,
  hideScrollbars?: boolean,
  scrollX?: boolean,
  scrollY?: boolean,
  tabIndex?: number | string
};

export type OverflowContainerState = {
  scrollable: boolean
};

export type OverflowContainerWithShadowsProps = {
  children?: React$Node,
  hideScrollbars?: boolean,
  scrollX?: boolean,
  scrollY?: boolean
};

export type OverflowContainerWithShadowsState = {
  hasShadowBottom: boolean,
  hasShadowLeft: boolean,
  hasShadowRight: boolean,
  hasShadowTop: boolean
};

export type OverflowContainerThemeFn = ComponentThemeFn<OverflowContainerTheme>;
export type OverflowContainerTheme = ComponentTheme<OverflowContainerThemeKeys>;
type OverflowContainerThemeKeys = {|
  OverflowContainer_outline_focus: ThemeValue
|};

export type OverflowContainerWithShadowsThemeFn = ComponentThemeFn<OverflowContainerWithShadowsTheme>;
export type OverflowContainerWithShadowsTheme = ComponentTheme<OverflowContainerWithShadowsThemeKeys>;
type OverflowContainerWithShadowsThemeKeys = {|
  OverflowContainerWithShadows_outline_focus: ThemeValue,
  OverflowContainerWithShadows_boxShadowBottom: ThemeValue,
  OverflowContainerWithShadows_boxShadowLeft: ThemeValue,
  OverflowContainerWithShadows_boxShadowRight: ThemeValue,
  OverflowContainerWithShadows_boxShadowTop: ThemeValue
|};

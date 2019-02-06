/* @flow */
import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

export interface OverflowContainerProps {
  children?: React.ReactNode;
  containerRef?: (node: HTMLElement | null | undefined) => void;
  hideScrollbars?: boolean;
  scrollX?: boolean;
  scrollY?: boolean;
  tabIndex?: number;
}

export interface OverflowContainerStyleProps
  extends Pick<
    OverflowContainerProps,
    'hideScrollbars' | 'scrollX' | 'scrollY' | 'tabIndex'
  > {}

export interface OverflowContainerState {
  scrollable: boolean;
}

export interface OverflowContainerWithShadowsProps
  extends OverflowContainerProps {}

export interface OverflowContainerWithShadowsState {
  hasShadowBottom: boolean;
  hasShadowLeft: boolean;
  hasShadowRight: boolean;
  hasShadowTop: boolean;
}

export type OverflowContainerThemeFn = ComponentThemeFn<OverflowContainerTheme>;
export type OverflowContainerTheme = ComponentTheme<OverflowContainerThemeKeys>;
interface OverflowContainerThemeKeys {
  OverflowContainer_outline_focus: ThemeValue;
}

export type OverflowContainerWithShadowsThemeFn = ComponentThemeFn<
  OverflowContainerWithShadowsTheme
>;
export type OverflowContainerWithShadowsTheme = ComponentTheme<
  OverflowContainerWithShadowsThemeKeys
>;
interface OverflowContainerWithShadowsThemeKeys {
  OverflowContainerWithShadows_outline_focus: ThemeValue;
  OverflowContainerWithShadows_boxShadowBottom: ThemeValue;
  OverflowContainerWithShadows_boxShadowLeft: ThemeValue;
  OverflowContainerWithShadows_boxShadowRight: ThemeValue;
  OverflowContainerWithShadows_boxShadowTop: ThemeValue;
}

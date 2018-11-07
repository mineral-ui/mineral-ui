/* @flow */
export type ThemeProviderProps = {
  children?: React$Node,
  theme?: Theme<>
};

export type Theme<T: ThemeObj = ThemeObj> = T | ThemeFn<T>;
export type ThemeObj = { [key: string]: ThemeValue };
export type ThemeFn<T: ThemeObj = ThemeObj> = (
  props: Object,
  context?: Object
) => T;
export type ThemeValue = any; // TODO: string | number | null;

export type ComponentTheme<T: ThemeObj> = T & BaseTheme;
export type ComponentThemeFn<T: ThemeObj> = (BaseTheme) => T & BaseTheme;

export type BaseTheme = ThemeObj; // TODO: Enumerate keys

/* @flow */
export type ThemeProviderProps = {
  children?: React.ReactNode,
  theme?: any
};

export type Theme<T> = T | ThemeFn<T>;
export type ThemeObj = { [key: string]: ThemeValue };
export type ThemeFn<T> = (
  props: Object,
  context?: Object
) => T;
export type ThemeValue = any; // TODO: string | number | null;

export type ComponentTheme<T> = T & BaseTheme;
export type ComponentThemeFn<T> = (baseTheme: BaseTheme) => T & BaseTheme;

export type BaseTheme = ThemeObj; // TODO: Enumerate keys
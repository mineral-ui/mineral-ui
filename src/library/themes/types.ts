/* @flow */
export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: Theme;
}

export type Theme = ThemeObj | ThemeFn;
export interface ThemeObj {
  [key: string]: ThemeValue;
}
export type ThemeFn = (
  props: { theme: ThemeObj },
  context?: object
) => ThemeObj;
export type ThemeValue = any; // TODO: string | number | null;

export type ComponentTheme<T> = T & BaseTheme;
export type ComponentThemeFn<T> = (baseTheme: BaseTheme) => T & BaseTheme;

export type BaseTheme = ThemeObj; // TODO: Enumerate keys

export const isThemeFn = (theme: Theme): theme is ThemeFn =>
  typeof theme === 'function';

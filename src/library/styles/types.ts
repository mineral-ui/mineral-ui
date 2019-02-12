/* @flow */
import { ThemeObj } from '../themes/types';

export type Styles = StyleObj | StyleArray | StyleFn;
export type StyleArray = Array<StyleObj>;
export interface StyleObj {
  [key: string]: StyleValue;
}
export type StyleFn = (
  props: object,
  context?: object
) => StyleObj | StyleArray;
export type StyleValue = null | boolean | number | string | StyleObj;

export type ComponentStyleReset = (theme: ThemeObj) => StyleObj;

export type PxToEm = (value: number | string) => string;

export type GetNormalizedValue = (
  value: string | number | null,
  base: string | number | null
) => string;

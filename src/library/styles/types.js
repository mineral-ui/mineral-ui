/* @flow */
import type { ThemeObj } from '../themes/types';

export type Styles = StyleObj | StyleArray | StyleFn;
export type StyleArray = Array<StyleObj>;
export type StyleObj = { [key: string]: StyleValue };
export type StyleFn = (
  props: Object,
  context?: Object
) => StyleObj | StyleArray;
export type StyleValue = null | boolean | number | string | StyleObj;

export type ComponentStyleReset = ({ theme: ThemeObj }) => StyleObj;

export type CreateStyledComponent = (
  element:
    | React$StatelessFunctionalComponent<*>
    | React$ComponentType<*>
    | string,
  styles: Styles,
  options?: {
    displayName?: string,
    filterProps?: Array<string>,
    forwardProps?: Array<string>,
    includeStyleReset?: boolean,
    rootEl?: string,
    withProps?: Object
  }
) => React$ComponentType<*>;

export type CreateRootNode<P, D = null> = (
  props: P,
  defaultProps: D
) => React$ComponentType<*>;

export type PxToEm = (value: number | string) => string;

export type GetNormalizedValue = (
  value: string | number | null,
  base: string | number | null
) => string;

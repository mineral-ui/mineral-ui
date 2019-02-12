/* @flow */
import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

type StringOrArrayOfStrings = $Keys<T> | Array<$Keys<T> | null>;

type AlignItems = StringOrArrayOfStrings<typeof ALIGN_ITEMS>;
type GutterWidth = keyof typeof GUTTER_WIDTH | number | string;

export interface GridProps {
  alignItems?: AlignItems;
  breakpoints?: Array<number | string>;
  children?: React.ReactNode;
  columns?: number;
  gutterWidth?: GutterWidth;
}

export interface GridDefaultProps {
  alignItems: AlignItems;
  columns: number;
  gutterWidth: GutterWidth;
}

export interface GridItemProps {
  span?: number | Array<number | null>;
}

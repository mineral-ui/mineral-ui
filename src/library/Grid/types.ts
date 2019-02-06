/* @flow */
import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

type StringOrArrayOfStrings = $Keys<T> | Array<$Keys<T> | null>;

type AlignItems = StringOrArrayOfStrings<typeof ALIGN_ITEMS>;
type GutterWidth = $Keys<typeof GUTTER_WIDTH> | number | string;

export type GridProps = {
  alignItems?: AlignItems;
  breakpoints?: Array<number | string>;
  children?: React$Node;
  columns?: number;
  gutterWidth?: GutterWidth;
};

export type GridDefaultProps = {
  alignItems: AlignItems;
  columns: number;
  gutterWidth: GutterWidth;
};

export type GridItemProps = {
  span?: number | Array<number | null>;
};

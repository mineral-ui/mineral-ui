/* @flow */
import {
  ALIGN_ITEMS,
  ALIGN_SELF,
  DIRECTION,
  GUTTER_WIDTH,
  JUSTIFY_CONTENT
} from './constants';

import type { HeightOrWidthProp } from '../Box/types';

type StringOrArrayOfStrings<T> = $Keys<T> | Array<$Keys<T> | null>;

type AlignItems = StringOrArrayOfStrings<typeof ALIGN_ITEMS>;
type Direction = StringOrArrayOfStrings<typeof DIRECTION>;
type GutterWidth = $Keys<typeof GUTTER_WIDTH> | number | string;
type JustifyContent = StringOrArrayOfStrings<typeof JUSTIFY_CONTENT>;

export type FlexProps = {
  alignItems?: AlignItems,
  breakpoints?: Array<number | string>,
  children?: React$Node,
  direction?: Direction,
  gutterWidth?: GutterWidth,
  justifyContent?: JustifyContent,
  wrap?: boolean | Array<boolean | null>
};

export type FlexDefaultProps = {
  alignItems: AlignItems,
  direction: Direction,
  gutterWidth: GutterWidth,
  justifyContent: JustifyContent
};

type GrowOrShrink = 0 | 1 | number | Array<0 | 1 | number | null>;

export type FlexItemProps = {
  /* TargetX Custom Props */
  flexBasis?: number | string,
  
  /* Built-In Props */
  alignSelf?: StringOrArrayOfStrings<typeof ALIGN_SELF>,
  breakpoints?: Array<number | string>,
  flex?: boolean,
  grow?: GrowOrShrink,
  minWidth?: HeightOrWidthProp,
  shrink?: GrowOrShrink
};

export type FlexItemDefaultProps = {
  grow: GrowOrShrink,
  shrink: GrowOrShrink
};

/* @flow */
import {
  ALIGN_ITEMS,
  ALIGN_SELF,
  DIRECTION,
  GUTTER_WIDTH,
  JUSTIFY_CONTENT
} from './constants';

import { BoxProps, HeightOrWidthProp } from '../Box/types';

type StringOrArrayOfStrings = $Keys<T> | Array<$Keys<T> | null>;

type AlignItems = StringOrArrayOfStrings<typeof ALIGN_ITEMS>;
type Direction = StringOrArrayOfStrings<typeof DIRECTION>;
type GutterWidth = keyof typeof GUTTER_WIDTH | number | string;
type JustifyContent = StringOrArrayOfStrings<typeof JUSTIFY_CONTENT>;

export interface FlexProps extends BoxProps {
  alignItems?: AlignItems;
  breakpoints?: Array<number | string>;
  children?: React.ReactNode;
  direction?: Direction;
  gutterWidth?: GutterWidth;
  justifyContent?: JustifyContent;
  wrap?: boolean | Array<boolean | null>;
}

export interface FlexDefaultProps {
  alignItems: AlignItems;
  direction: Direction;
  gutterWidth: GutterWidth;
  justifyContent: JustifyContent;
}

type GrowOrShrink = 0 | 1 | number | Array<0 | 1 | number | null>;

export interface FlexItemProps extends FlexProps {
  alignSelf?: StringOrArrayOfStrings<typeof ALIGN_SELF>;
  breakpoints?: Array<number | string>;
  flex?: boolean;
  grow?: GrowOrShrink;
  minWidth?: HeightOrWidthProp;
  shrink?: GrowOrShrink;
}

export interface FlexItemDefaultProps {
  grow: GrowOrShrink;
  shrink: GrowOrShrink;
}

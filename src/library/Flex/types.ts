/* @flow */
import {
  ALIGN_ITEMS,
  ALIGN_SELF,
  DIRECTION,
  GUTTER_WIDTH,
  JUSTIFY_CONTENT
} from './constants';

import { BoxProps, HeightOrWidthProp } from '../Box/types';

type ThingOrThingArray<T> = T | Array<T | null>;
type StringOrStringArray<T> = ThingOrThingArray<keyof T>;

type AlignItems = StringOrStringArray<typeof ALIGN_ITEMS>;
type Direction = StringOrStringArray<typeof DIRECTION>;
type GutterWidth = keyof typeof GUTTER_WIDTH | number | string;
type JustifyContent = StringOrStringArray<typeof JUSTIFY_CONTENT>;

export type GetMarginOrGutter = (a: {
  gutterWidth: GutterWidth;
  index?: number;
  margin?: ThingOrThingArray<number | string>;
  marginEnd?: ThingOrThingArray<number | string>;
  marginHorizontal?: ThingOrThingArray<number | string>;
  marginStart?: ThingOrThingArray<number | string>;
  start?: boolean;
  theme: object;
}) => number | string | undefined;

export type PushMarginProps = (a: {
  direction?: Direction;
  gutterWidth: GutterWidth;
  index: number;
  props: {
    marginEnd: Array<number | string>;
    marginStart: Array<number | string>;
  };
  theme: object;
}) => void;

export interface FlexProps extends BoxProps {
  alignItems?: AlignItems;
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

// TODO: This should extend FlexProps when flex is true; otherwise extend BoxProps
export interface FlexItemProps extends FlexProps {
  alignSelf?: StringOrStringArray<typeof ALIGN_SELF>;
  flex?: boolean;
  grow?: GrowOrShrink;
  minWidth?: HeightOrWidthProp;
  shrink?: GrowOrShrink;
}

export interface FlexItemDefaultProps {
  grow: GrowOrShrink;
  shrink: GrowOrShrink;
}

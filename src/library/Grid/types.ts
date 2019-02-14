/* @flow */
import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

import { BoxProps } from '../Box/types';
import { FlexProps } from '../Flex/types';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type StringOrArrayOfStrings<T> = keyof T | Array<keyof T | null>;

type AlignItems = StringOrArrayOfStrings<typeof ALIGN_ITEMS>;
type GutterWidth = keyof typeof GUTTER_WIDTH | number | string;

export interface GridProps
  extends Omit<FlexProps, 'direction' | 'inline' | 'justifyContent' | 'wrap'> {
  columns?: number;
}

export interface GridDefaultProps {
  alignItems: AlignItems;
  columns: number;
  gutterWidth: GutterWidth;
}

// GridItem is a styled FlexItem, but all FlexItem-specific props are disallowed
export interface GridItemProps extends Omit<BoxProps, 'inline' | 'width'> {
  span?: number | Array<number | null>;
}

export interface GridCombinedProps extends GridProps, GridItemProps {}

export type GridItemStyleProps = Pick<
  GridCombinedProps,
  'breakpoints' | 'columns' | 'gutterWidth' | 'span'
> & {
  shrink?: number; // TODO: Maybe this should be excluded entirely from GridItemProps?
};

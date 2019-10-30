/* @flow */
import { SPACING_SIZE, INSET_SPACING_SIZE } from './constants';

import type { StyleValue } from '../styles/types';

type SpacingSize = $Keys<typeof SPACING_SIZE>;
type InsetSpacingSize = $Keys<typeof INSET_SPACING_SIZE>;

export type BoxProps = {
  /* TargetX Custom Props */
  background?: string,
  backgroundColor?: string,
  blur?: number,
  border?: string,
  borderBottom?: string,
  borderLeft?: string,
  borderRadius?: string | Array<string>,
  borderRight?: string,
  borderTop?: string,
  boxShadow?: string,
  cursor?: string,
  filter?: string,
  maxHeight?: string | number,
  maxWidth?: string | number,
  minHeight?: string | number,
  minWidth?: string | number,
  overflow?: string,
  position?: string,
  scrollable?: boolean,
  top?: string,
  zIndex?: string | number,

  /* Built-In Props */
  breakpoints?: Array<number | string>,
  height?: HeightOrWidthProp,
  inline?: boolean | Array<boolean | null>,
  margin?: SpacingProp,
  marginBottom?: SpacingProp,
  marginEnd?: SpacingProp,
  marginHorizontal?: SpacingProp,
  marginLeft?: SpacingProp,
  marginRight?: SpacingProp,
  marginStart?: SpacingProp,
  marginTop?: SpacingProp,
  marginVertical?: SpacingProp,
  padding?: InsetSpacingProp,
  paddingBottom?: SpacingProp,
  padddingEnd?: SpacingProp,
  paddingHorizontal?: SpacingProp,
  paddingLeft?: SpacingProp,
  paddingRight?: SpacingProp,
  padddingStart?: SpacingProp,
  paddingTop?: SpacingProp,
  paddingVertical?: SpacingProp,
  width?: HeightOrWidthProp
};

export type SpacingStyles = {
  [string]: Array<SpacingValue> | SpacingValue
};

export type SpacingValue = StyleValue | SpacingSize;

export type HeightOrWidthProp = number | string | Array<number | string | null>;

type SpacingProp =
  | number
  | string
  | SpacingSize
  | Array<null | number | string | SpacingSize>;

type InsetSpacingProp =
  | number
  | string
  | InsetSpacingSize
  | Array<null | number | string | InsetSpacingSize>;

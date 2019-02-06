/* @flow */
import { pxToEm } from '../styles';

export const ICON_SIZE = {
  small: 'medium',
  medium: 'medium',
  large: pxToEm(24),
  jumbo: pxToEm(24)
};

export enum SHAPE {
  circle = 'circle',
  rounded = 'rounded',
  square = 'square'
};

export enum SIZE {
  small = 'small',
  medium = 'medium',
  large = 'large',
  jumbo = 'jumbo'
};

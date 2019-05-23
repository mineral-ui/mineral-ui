/* @flow */
import { pxToEm } from '../styles';

export const ICON_SIZE = {
  small: 'medium',
  medium: 'medium',
  large: pxToEm(24),
  jumbo: pxToEm(24)
};

export const SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
};

export const VARIANT = {
  /* TargetX Custom Variant */
  grayscale: 'grayscale',

  danger: 'danger',
  success: 'success',
  warning: 'warning'
};

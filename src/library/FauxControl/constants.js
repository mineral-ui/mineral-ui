/* @flow */
import { pxToEm } from '../styles';

export const ICON_SIZE = {
  small: 'medium',
  medium: 'medium',
  large: pxToEm(13), // TargetX Custom Style
  jumbo: pxToEm(24)
};

export const SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
};

export const VARIANT = {
  danger: 'danger',
  success: 'success',
  warning: 'warning'
};

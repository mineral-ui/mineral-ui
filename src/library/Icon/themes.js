/* @flow */
import { pxToEm } from '../styles';

import type { IconThemeFn } from './types';

export const iconTheme: IconThemeFn = (baseTheme) => ({
  Icon_fill: 'currentcolor',
  Icon_size_small: pxToEm(12),
  Icon_size_medium: pxToEm(16),
  Icon_size_large: pxToEm(20),
  ...baseTheme
});

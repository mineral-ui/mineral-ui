/* @flow */
import type { GetNormalizedValue } from './types';
/**
 * Helper to normalize a theme variable (defined in ems) against the applied
 * fontSize (also defined in ems), so that the resulting value renders correctly
 */
const getNormalizedValue: GetNormalizedValue = (
  value: string | number | null,
  base: string | number | null
) => `${parseFloat(value) / parseFloat(base)}em`;

export default getNormalizedValue;

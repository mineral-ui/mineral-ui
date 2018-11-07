/* @flow */
import { DIRECTION, PRIORITY } from './constants';

export type StartEndProps = {
  breakpoints?: Array<number | string>,
  children: React$Node,
  direction?: $Keys<typeof DIRECTION> | Array<$Keys<typeof DIRECTION> | null>,
  justifyContent?: any,
  priority?: $Keys<typeof PRIORITY>,
  wrap?: any
};

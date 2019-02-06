/* @flow */
import { DIRECTION, PRIORITY } from './constants';

export type StartEndProps = {
  breakpoints?: Array<number | string>,
  children?: React.ReactNode,
  direction?: keyof typeof DIRECTION | Array<keyof typeof DIRECTION | null>,
  justifyContent?: any,
  priority?: keyof typeof PRIORITY,
  wrap?: any
};

/* @flow */
import { DIRECTION, PRIORITY } from './constants';

import { FlexProps } from '../Flex/types';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type StringOrArrayOfStrings<T> = keyof T | Array<keyof T | null>;

type Direction = StringOrArrayOfStrings<typeof DIRECTION>;

export interface StartEndProps
  extends Omit<FlexProps, 'justifyContent' | 'wrap'> {
  direction?: Direction;
  priority?: keyof typeof PRIORITY;
}

/* @flow */
import { DIRECTION, PRIORITY } from './constants';

import { FlexProps } from '../Flex/types';

type StringOrArrayOfStrings<T> = keyof T | Array<keyof T | null>;
type Direction = StringOrArrayOfStrings<typeof DIRECTION>;

// TODO: How to exclude justifyContent and wrap from this interface?
export interface StartEndProps extends FlexProps {
  direction?: Direction;
  justifyContent?: any;
  priority?: keyof typeof PRIORITY;
  wrap?: any;
}

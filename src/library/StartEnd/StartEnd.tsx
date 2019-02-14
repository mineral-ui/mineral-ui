/* @flow */
import React, { Children } from 'react';
import Flex, { FlexItem } from '../Flex';
import { JUSTIFY_CONTENT } from '../Flex/constants';

import { StartEndProps } from './types';

export default function StartEnd(props: StartEndProps) {
  const { children, priority, ...restProps } = props;
  const rootProps = {
    justifyContent: JUSTIFY_CONTENT.between,
    ...restProps
  };
  let flexItems;
  if (Children.count(children) === 2) {
    const growFactors = {
      start: [1, 0],
      end: [0, 1],
      both: [1, 1],
      none: [undefined, undefined]
    };
    flexItems = Children.map(children, (child, index) => {
      return index ? (
        <FlexItem grow={growFactors[priority || 'none'][1]}>{child}</FlexItem>
      ) : (
        <FlexItem grow={growFactors[priority || 'none'][0]}>{child}</FlexItem>
      );
    });
  } else {
    throw new Error('StartEnd must have exactly two children.');
  }

  // $FlowFixMe - Reverse directions unsupported here but are supported on Flex
  return <Flex {...rootProps}>{flexItems}</Flex>;
}

StartEnd.displayName = 'StartEnd';

/* @flow */
import React from 'react';
import { FlexItemRoot as Root } from './styled';
import Flex from './Flex';

import { flexItemPropTypes } from './propTypes';
import type { FlexItemDefaultProps, FlexItemProps } from './types';

export default function FlexItem({ flex, ...restProps }: FlexItemProps) {
  const rootProps = {
    ...(flex ? { as: Flex } : undefined),
    flex,
    ...restProps
  };

  return <Root {...rootProps} />;
}

const defaultProps: FlexItemDefaultProps = {
  grow: 0,
  shrink: 1
};

FlexItem.displayName = 'FlexItem';
FlexItem.defaultProps = defaultProps;
FlexItem.propTypes = flexItemPropTypes;

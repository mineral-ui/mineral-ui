/* @flow */
import React from 'react';
import { CardBlockRoot as Root, CardBlockInner as Inner } from './styled';

import { cardBlockPropTypes } from './propTypes';
import { CardBlockProps } from './types';

export default function CardBlock(props: CardBlockProps) {
  const { children, ...restProps } = props;

  return (
    <Root {...restProps}>
      <Inner>{children}</Inner>
    </Root>
  );
}

CardBlock.displayName = 'CardBlock';
CardBlock.propTypes = cardBlockPropTypes;

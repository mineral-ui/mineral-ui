/* @flow */
import React from 'react';
import { CardDividerRoot as Root } from './styled';

import { cardDividerPropTypes } from './propTypes';
import type { CardDividerProps } from './types';

export default function CardDivider(props: CardDividerProps) {
  return <Root {...props} role="separator" />;
}

CardDivider.displayName = 'CardDivider';
CardDivider.propTypes = cardDividerPropTypes;

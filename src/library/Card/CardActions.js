/* @flow */
import React, { Children, cloneElement } from 'react';
import Button from '../Button';
import { SIZE } from '../Button/constants';
import { CardAction as Action, CardActionsRoot as Root } from './styled';

import { cardActionsPropTypes } from './propTypes';
import type { CardActionsProps } from './types';

export default function CardActions(props: CardActionsProps) {
  const { children, ...restProps } = props;
  const actions = Children.map(children, (child, index) => {
    if (child.type === Button) {
      child = cloneElement(child, { size: SIZE.medium });
    }
    return <Action key={index}>{child}</Action>;
  });

  return <Root {...restProps}>{actions}</Root>;
}

CardActions.propTypes = cardActionsPropTypes;

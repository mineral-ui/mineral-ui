/* @flow */
import React from 'react';
import { CardRoot as Root } from './styled';

import { cardPropTypes } from './propTypes';
import type { CardProps } from './types';

const onKeyDown = (props: CardProps, event: SyntheticKeyboardEvent<>) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    props.onClick && props.onClick(event);
  }
};

export default function Card(props: CardProps) {
  const rootProps = {
    onKeyDown: props.onClick ? onKeyDown.bind(null, props) : undefined,
    role: props.onClick ? 'button' : undefined,
    tabIndex: props.onClick ? 0 : undefined,
    ...props
  };

  return <Root {...rootProps} />;
}

Card.propTypes = cardPropTypes;

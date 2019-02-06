/* @flow */
import React from 'react';
import { CardImageRoot as Root } from './styled';

import { cardImagePropTypes } from './propTypes';
import { CardImageProps } from './types';

export default function CardImage(props: CardImageProps) {
  return <Root {...props} />;
}

CardImage.displayName = 'CardImage';
CardImage.propTypes = cardImagePropTypes;

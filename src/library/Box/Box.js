/* @flow */
import React from 'react';
import { BoxRoot as Root } from './styled';

import { boxPropTypes } from './propTypes';
import type { BoxProps } from './types';

export default function Box(props: BoxProps) {
  return <Root {...props} />;
}

Box.displayName = 'Box';
Box.propTypes = boxPropTypes;

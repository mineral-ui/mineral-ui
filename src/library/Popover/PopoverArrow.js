/* @flow */
import React from 'react';
import { PopoverArrowRoot as Root } from './styled';

import type { PopoverArrowProps } from './types';

export default function PopoverArrow(props: PopoverArrowProps) {
  return (
    <Root {...props} aria-hidden>
      ▼
    </Root>
  );
}

PopoverArrow.displayName = 'PopoverArrow';

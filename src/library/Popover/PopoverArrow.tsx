/* @flow */
import React, { forwardRef } from 'react';
import { PopoverArrowRoot as Root } from './styled';

import { PopoverArrowProps } from './types';

const PopoverArrow = forwardRef<HTMLElement, PopoverArrowProps>(
  (props, ref) => {
    return (
      <Root {...props} aria-hidden ref={ref}>
        ▼
      </Root>
    );
  }
);

PopoverArrow.displayName = 'PopoverArrow';

export default PopoverArrow;

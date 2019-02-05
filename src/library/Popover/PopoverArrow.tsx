/* @flow */
import React, { forwardRef } from 'react';
import { PopoverArrowRoot as Root } from './styled';

import type { PopoverArrowProps } from './types';

const PopoverArrow = forwardRef<PopoverArrowProps, HTMLElement>(
  (props: PopoverArrowProps, ref: React$Ref<*>) => {
    return (
      <Root {...props} aria-hidden ref={ref}>
        ▼
      </Root>
    );
  }
);

PopoverArrow.displayName = 'PopoverArrow';

export default PopoverArrow;

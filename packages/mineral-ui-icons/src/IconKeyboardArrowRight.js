/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconKeyboardArrowRight(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
      </g>
    </Icon>
  );
}

IconKeyboardArrowRight.displayName = 'IconKeyboardArrowRight';
IconKeyboardArrowRight.category = 'hardware';

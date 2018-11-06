/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconKeyboardArrowDown(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
      </g>
    </Icon>
  );
}

IconKeyboardArrowDown.displayName = 'IconKeyboardArrowDown';
IconKeyboardArrowDown.category = 'hardware';

/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconCheckBoxCheck(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M8.8 14.8l-4.2-4.1L2.1 13l6.7 6.7 13-13-2.4-2.6L8.8 14.8z"/>
      </g>
    </Icon>
  );
}

IconCheckBoxCheck.displayName = 'IconCheckBoxCheck';
IconCheckBoxCheck.category = 'toggle';

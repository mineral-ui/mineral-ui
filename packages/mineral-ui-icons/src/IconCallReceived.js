/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconCallReceived(props: IconProps) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/>
      </g>
    </Icon>
  );
}

IconCallReceived.displayName = 'IconCallReceived';
IconCallReceived.category = 'communication';

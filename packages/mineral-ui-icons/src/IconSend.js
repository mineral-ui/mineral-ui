/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconSend(props: IconProps) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
      </g>
    </Icon>
  );
}

IconSend.displayName = 'IconSend';
IconSend.category = 'content';

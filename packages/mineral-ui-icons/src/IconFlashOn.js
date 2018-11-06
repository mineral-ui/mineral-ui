/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconFlashOn(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
      </g>
    </Icon>
  );
}

IconFlashOn.displayName = 'IconFlashOn';
IconFlashOn.category = 'image';

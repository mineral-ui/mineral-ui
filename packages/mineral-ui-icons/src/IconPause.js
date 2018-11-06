/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconPause(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
      </g>
    </Icon>
  );
}

IconPause.displayName = 'IconPause';
IconPause.category = 'av';

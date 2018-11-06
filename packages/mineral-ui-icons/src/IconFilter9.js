/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconFilter9(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM15 5h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2h-4v2h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 4h-2V7h2v2z"/>
      </g>
    </Icon>
  );
}

IconFilter9.displayName = 'IconFilter9';
IconFilter9.category = 'image';

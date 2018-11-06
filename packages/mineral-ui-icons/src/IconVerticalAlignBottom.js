/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconVerticalAlignBottom(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/>
      </g>
    </Icon>
  );
}

IconVerticalAlignBottom.displayName = 'IconVerticalAlignBottom';
IconVerticalAlignBottom.category = 'editor';

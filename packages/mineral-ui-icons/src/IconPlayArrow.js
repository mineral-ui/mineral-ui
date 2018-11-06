/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconPlayArrow(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M8 5v14l11-7z"/>
      </g>
    </Icon>
  );
}

IconPlayArrow.displayName = 'IconPlayArrow';
IconPlayArrow.category = 'av';

/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconArrowDropUp(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M7 14l5-5 5 5z"/>
      </g>
    </Icon>
  );
}

IconArrowDropUp.displayName = 'IconArrowDropUp';
IconArrowDropUp.category = 'navigation';

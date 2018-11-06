/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconViewCarousel(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/>
      </g>
    </Icon>
  );
}

IconViewCarousel.displayName = 'IconViewCarousel';
IconViewCarousel.category = 'action';

/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconNearMe(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>
      </g>
    </Icon>
  );
}

IconNearMe.displayName = 'IconNearMe';
IconNearMe.category = 'maps';

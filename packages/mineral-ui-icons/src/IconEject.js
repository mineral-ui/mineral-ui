/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconEject(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"/>
      </g>
    </Icon>
  );
}

IconEject.displayName = 'IconEject';
IconEject.category = 'action';

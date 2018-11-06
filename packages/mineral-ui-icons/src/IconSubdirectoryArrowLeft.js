/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconSubdirectoryArrowLeft(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/>
      </g>
    </Icon>
  );
}

IconSubdirectoryArrowLeft.displayName = 'IconSubdirectoryArrowLeft';
IconSubdirectoryArrowLeft.category = 'navigation';

/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconBrightness1(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <circle cx="12" cy="12" r="10"/>
      </g>
    </Icon>
  );
}

IconBrightness1.displayName = 'IconBrightness1';
IconBrightness1.category = 'image';

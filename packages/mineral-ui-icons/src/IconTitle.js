/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconTitle(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M5 4v3h5.5v12h3V7H19V4z"/>
      </g>
    </Icon>
  );
}

IconTitle.displayName = 'IconTitle';
IconTitle.category = 'editor';

/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconTrendingFlat(props: IconProps) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M22 12l-4-4v3H3v2h15v3z"/>
      </g>
    </Icon>
  );
}

IconTrendingFlat.displayName = 'IconTrendingFlat';
IconTrendingFlat.category = 'action';

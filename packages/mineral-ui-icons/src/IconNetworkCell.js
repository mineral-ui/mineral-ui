/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconNetworkCell(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path fillOpacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/>
      </g>
    </Icon>
  );
}

IconNetworkCell.displayName = 'IconNetworkCell';
IconNetworkCell.category = 'device';

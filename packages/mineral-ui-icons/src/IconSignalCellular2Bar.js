/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconSignalCellular2Bar(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path fillOpacity=".3" d="M2 22h20V2z"/><path d="M14 10L2 22h12z"/>
      </g>
    </Icon>
  );
}

IconSignalCellular2Bar.displayName = 'IconSignalCellular2Bar';
IconSignalCellular2Bar.category = 'device';

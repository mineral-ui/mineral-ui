/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconSignalCellularConnectedNoInternet4Bar(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"/>
      </g>
    </Icon>
  );
}

IconSignalCellularConnectedNoInternet4Bar.displayName = 'IconSignalCellularConnectedNoInternet4Bar';
IconSignalCellularConnectedNoInternet4Bar.category = 'device';

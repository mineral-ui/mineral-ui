/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconSignalCellularConnectedNoInternet3Bar(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path fillOpacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z"/>
      </g>
    </Icon>
  );
}

IconSignalCellularConnectedNoInternet3Bar.displayName = 'IconSignalCellularConnectedNoInternet3Bar';
IconSignalCellularConnectedNoInternet3Bar.category = 'device';

/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconSignalCellular1Bar(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path fillOpacity=".3" d="M2 22h20V2z"/><path d="M12 12L2 22h10z"/>
      </g>
    </Icon>
  );
}

IconSignalCellular1Bar.displayName = 'IconSignalCellular1Bar';
IconSignalCellular1Bar.category = 'device';

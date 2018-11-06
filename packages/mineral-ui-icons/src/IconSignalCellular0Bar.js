/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconSignalCellular0Bar(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path fillOpacity=".3" d="M2 22h20V2z"/>
      </g>
    </Icon>
  );
}

IconSignalCellular0Bar.displayName = 'IconSignalCellular0Bar';
IconSignalCellular0Bar.category = 'device';

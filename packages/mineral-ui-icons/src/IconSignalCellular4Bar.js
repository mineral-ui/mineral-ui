/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconSignalCellular4Bar(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M2 22h20V2z"/>
      </g>
    </Icon>
  );
}

IconSignalCellular4Bar.displayName = 'IconSignalCellular4Bar';
IconSignalCellular4Bar.category = 'device';

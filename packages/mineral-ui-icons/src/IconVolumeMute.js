/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconVolumeMute(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M7 9v6h4l5 5V4l-5 5H7z"/>
      </g>
    </Icon>
  );
}

IconVolumeMute.displayName = 'IconVolumeMute';
IconVolumeMute.category = 'av';

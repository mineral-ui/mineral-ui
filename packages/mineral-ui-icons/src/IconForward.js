/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconForward(props: IconProps) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M12 8V4l8 8-8 8v-4H4V8z"/>
      </g>
    </Icon>
  );
}

IconForward.displayName = 'IconForward';
IconForward.category = 'content';

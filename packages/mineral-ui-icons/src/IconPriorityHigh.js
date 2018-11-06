/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconPriorityHigh(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/>
      </g>
    </Icon>
  );
}

IconPriorityHigh.displayName = 'IconPriorityHigh';
IconPriorityHigh.category = 'notification';

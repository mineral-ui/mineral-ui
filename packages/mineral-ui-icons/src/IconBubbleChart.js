/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconBubbleChart(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <circle cx="7.2" cy="14.4" r="3.2"/><circle cx="14.8" cy="18" r="2"/><circle cx="15.2" cy="8.8" r="4.8"/>
      </g>
    </Icon>
  );
}

IconBubbleChart.displayName = 'IconBubbleChart';
IconBubbleChart.category = 'editor';

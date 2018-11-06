/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconCallMissedOutgoing(props: IconProps) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"/>
      </g>
    </Icon>
  );
}

IconCallMissedOutgoing.displayName = 'IconCallMissedOutgoing';
IconCallMissedOutgoing.category = 'communication';

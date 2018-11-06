/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconCallMade(props: IconProps) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
      </g>
    </Icon>
  );
}

IconCallMade.displayName = 'IconCallMade';
IconCallMade.category = 'communication';

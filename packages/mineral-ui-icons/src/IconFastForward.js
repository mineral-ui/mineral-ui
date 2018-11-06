/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconFastForward(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
      </g>
    </Icon>
  );
}

IconFastForward.displayName = 'IconFastForward';
IconFastForward.category = 'av';

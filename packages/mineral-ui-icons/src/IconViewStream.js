/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconViewStream(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/>
      </g>
    </Icon>
  );
}

IconViewStream.displayName = 'IconViewStream';
IconViewStream.category = 'action';

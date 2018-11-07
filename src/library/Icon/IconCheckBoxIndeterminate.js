/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconCheckBoxIndeterminate(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M4 10h16v4H4z"/>
      </g>
    </Icon>
  );
}

IconCheckBoxIndeterminate.displayName = 'IconCheckBoxIndeterminate';
IconCheckBoxIndeterminate.category = 'toggle';

/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconSkipPrevious(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
      </g>
    </Icon>
  );
}

IconSkipPrevious.displayName = 'IconSkipPrevious';
IconSkipPrevious.category = 'av';

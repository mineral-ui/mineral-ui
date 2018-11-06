/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconRemove(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M19 13H5v-2h14v2z"/>
      </g>
    </Icon>
  );
}

IconRemove.displayName = 'IconRemove';
IconRemove.category = 'content';

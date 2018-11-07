/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconArrowDropdownUp(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M12 7.5l8 8H4z"/>
      </g>
    </Icon>
  );
}

IconArrowDropdownUp.displayName = 'IconArrowDropdownUp';
IconArrowDropdownUp.category = 'navigation';

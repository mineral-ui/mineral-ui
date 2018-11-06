/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconArrowDropDown(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M7 10l5 5 5-5z"/>
      </g>
    </Icon>
  );
}

IconArrowDropDown.displayName = 'IconArrowDropDown';
IconArrowDropDown.category = 'navigation';

/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconArrowDropdownDown(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M12 17.5l-8-8h16z"/>
      </g>
    </Icon>
  );
}

IconArrowDropdownDown.displayName = 'IconArrowDropdownDown';
IconArrowDropdownDown.category = 'navigation';

/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconRadioButtonCheck(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <circle cx="12" cy="12" r="3.43"/>
      </g>
    </Icon>
  );
}

IconRadioButtonCheck.displayName = 'IconRadioButtonCheck';
IconRadioButtonCheck.category = 'toggle';

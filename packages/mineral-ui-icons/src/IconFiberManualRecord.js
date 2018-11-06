/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconFiberManualRecord(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <circle cx="12" cy="12" r="8"/>
      </g>
    </Icon>
  );
}

IconFiberManualRecord.displayName = 'IconFiberManualRecord';
IconFiberManualRecord.category = 'av';

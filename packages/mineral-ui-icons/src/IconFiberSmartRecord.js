/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconFiberSmartRecord(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <g><circle cx="9" cy="12" r="8"/><path d="M17 4.26v2.09a5.99 5.99 0 0 1 0 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"/></g>
      </g>
    </Icon>
  );
}

IconFiberSmartRecord.displayName = 'IconFiberSmartRecord';
IconFiberSmartRecord.category = 'av';

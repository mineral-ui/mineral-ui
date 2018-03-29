/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

type Props = {
  size?: string | 'small' | 'medium' | 'large',
  color?: string,
  rtl?: boolean,
  title?: string
};

/* eslint-disable prettier/prettier */
export default function IconSignalCellularNull(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"/>
      </g>
    </Icon>
  );
}

IconSignalCellularNull.displayName = 'IconSignalCellularNull';
IconSignalCellularNull.category = 'device';

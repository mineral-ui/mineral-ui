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
export default function IconSignalCellular4Bar(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M2 22h20V2z"/>
      </g>
    </Icon>
  );
}

IconSignalCellular4Bar.displayName = 'IconSignalCellular4Bar';
IconSignalCellular4Bar.category = 'device';

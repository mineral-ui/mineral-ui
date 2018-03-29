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
export default function IconSignalCellular0Bar(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path fillOpacity=".3" d="M2 22h20V2z"/>
      </g>
    </Icon>
  );
}

IconSignalCellular0Bar.displayName = 'IconSignalCellular0Bar';
IconSignalCellular0Bar.category = 'device';

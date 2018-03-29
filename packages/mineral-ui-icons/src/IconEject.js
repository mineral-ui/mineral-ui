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
export default function IconEject(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"/>
      </g>
    </Icon>
  );
}

IconEject.displayName = 'IconEject';
IconEject.category = 'action';

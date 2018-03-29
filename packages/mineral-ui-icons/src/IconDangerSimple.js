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
export default function IconDangerSimple(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M3.94 20.49h16.118a1 1 0 0 0 .866-1.498l-8.06-13.99a.996.996 0 0 0-1.732-.001L3.074 18.993a.998.998 0 0 0 .867 1.499l-.001-.002z"/>
      </g>
    </Icon>
  );
}

IconDangerSimple.displayName = 'IconDangerSimple';
IconDangerSimple.category = 'alert';

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
export default function IconDanger(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M3.94 19.49h16.118a1 1 0 0 0 .866-1.498l-8.06-13.99a.996.996 0 0 0-1.732-.001L3.074 17.993a.998.998 0 0 0 .867 1.499zM12 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3.503h-2v-5h2v5z"/>
      </g>
    </Icon>
  );
}

IconDanger.displayName = 'IconDanger';
IconDanger.category = 'alert';

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
export default function IconSend(props: Props) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
      </g>
    </Icon>
  );
}

IconSend.displayName = 'IconSend';
IconSend.category = 'content';

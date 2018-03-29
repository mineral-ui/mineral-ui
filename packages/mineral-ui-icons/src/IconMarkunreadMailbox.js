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
export default function IconMarkunreadMailbox(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
      </g>
    </Icon>
  );
}

IconMarkunreadMailbox.displayName = 'IconMarkunreadMailbox';
IconMarkunreadMailbox.category = 'action';

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
export default function IconDragHandle(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/>
      </g>
    </Icon>
  );
}

IconDragHandle.displayName = 'IconDragHandle';
IconDragHandle.category = 'editor';

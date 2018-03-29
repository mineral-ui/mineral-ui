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
export default function IconLooksTwo(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8a2 2 0 0 1-2 2h-2v2h4v2H9v-4a2 2 0 0 1 2-2h2V9H9V7h4a2 2 0 0 1 2 2v2z"/>
      </g>
    </Icon>
  );
}

IconLooksTwo.displayName = 'IconLooksTwo';
IconLooksTwo.category = 'image';

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
export default function IconFunctions(props: Props) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"/>
      </g>
    </Icon>
  );
}

IconFunctions.displayName = 'IconFunctions';
IconFunctions.category = 'editor';

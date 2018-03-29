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
export default function IconSkipNext(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
      </g>
    </Icon>
  );
}

IconSkipNext.displayName = 'IconSkipNext';
IconSkipNext.category = 'av';

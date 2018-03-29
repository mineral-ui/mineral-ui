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
export default function IconSkipPrevious(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
      </g>
    </Icon>
  );
}

IconSkipPrevious.displayName = 'IconSkipPrevious';
IconSkipPrevious.category = 'av';

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
export default function IconDetails(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"/>
      </g>
    </Icon>
  );
}

IconDetails.displayName = 'IconDetails';
IconDetails.category = 'image';

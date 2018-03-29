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
export default function IconFileUpload(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
      </g>
    </Icon>
  );
}

IconFileUpload.displayName = 'IconFileUpload';
IconFileUpload.category = 'file';

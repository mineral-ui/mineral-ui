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
export default function IconVolumeMute(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M7 9v6h4l5 5V4l-5 5H7z"/>
      </g>
    </Icon>
  );
}

IconVolumeMute.displayName = 'IconVolumeMute';
IconVolumeMute.category = 'av';

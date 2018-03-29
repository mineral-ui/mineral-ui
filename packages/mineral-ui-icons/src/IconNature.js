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
export default function IconNature(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M13 16.12a7 7 0 0 0 6.17-6.95c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 11 16.06V20H5v2h14v-2h-6v-3.88z"/>
      </g>
    </Icon>
  );
}

IconNature.displayName = 'IconNature';
IconNature.category = 'image';

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
export default function IconExpandMore(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
      </g>
    </Icon>
  );
}

IconExpandMore.displayName = 'IconExpandMore';
IconExpandMore.category = 'navigation';

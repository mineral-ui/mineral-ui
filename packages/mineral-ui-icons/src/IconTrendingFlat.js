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
export default function IconTrendingFlat(props: Props) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M22 12l-4-4v3H3v2h15v3z"/>
      </g>
    </Icon>
  );
}

IconTrendingFlat.displayName = 'IconTrendingFlat';
IconTrendingFlat.category = 'action';

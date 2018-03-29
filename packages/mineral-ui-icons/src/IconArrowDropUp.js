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
export default function IconArrowDropUp(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M7 14l5-5 5 5z"/>
      </g>
    </Icon>
  );
}

IconArrowDropUp.displayName = 'IconArrowDropUp';
IconArrowDropUp.category = 'navigation';

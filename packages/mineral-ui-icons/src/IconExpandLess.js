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
export default function IconExpandLess(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
      </g>
    </Icon>
  );
}

IconExpandLess.displayName = 'IconExpandLess';
IconExpandLess.category = 'navigation';

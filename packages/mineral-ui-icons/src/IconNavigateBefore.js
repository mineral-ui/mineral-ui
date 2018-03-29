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
export default function IconNavigateBefore(props: Props) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </g>
    </Icon>
  );
}

IconNavigateBefore.displayName = 'IconNavigateBefore';
IconNavigateBefore.category = 'image';

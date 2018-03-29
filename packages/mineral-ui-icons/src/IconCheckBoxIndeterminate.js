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
export default function IconCheckBoxIndeterminate(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M4 10h16v4H4z"/>
      </g>
    </Icon>
  );
}

IconCheckBoxIndeterminate.displayName = 'IconCheckBoxIndeterminate';
IconCheckBoxIndeterminate.category = 'toggle';

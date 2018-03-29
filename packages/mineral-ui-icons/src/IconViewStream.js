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
export default function IconViewStream(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/>
      </g>
    </Icon>
  );
}

IconViewStream.displayName = 'IconViewStream';
IconViewStream.category = 'action';

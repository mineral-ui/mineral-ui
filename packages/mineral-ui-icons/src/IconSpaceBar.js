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
export default function IconSpaceBar(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M18 9v4H6V9H4v6h16V9z"/>
      </g>
    </Icon>
  );
}

IconSpaceBar.displayName = 'IconSpaceBar';
IconSpaceBar.category = 'editor';

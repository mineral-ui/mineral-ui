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
export default function IconArrowDropdownUp(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M12 7.5l8 8H4z"/>
      </g>
    </Icon>
  );
}

IconArrowDropdownUp.displayName = 'IconArrowDropdownUp';
IconArrowDropdownUp.category = 'navigation';

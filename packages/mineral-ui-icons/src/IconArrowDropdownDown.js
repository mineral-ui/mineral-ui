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
export default function IconArrowDropdownDown(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M12 17.5l-8-8h16z"/>
      </g>
    </Icon>
  );
}

IconArrowDropdownDown.displayName = 'IconArrowDropdownDown';
IconArrowDropdownDown.category = 'navigation';

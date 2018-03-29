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
export default function IconSuccess(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M12 3c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm-4.247 8.445L6.5 12.698l3.838 3.838 7.198-7.198-1.253-1.254-5.945 5.945-2.585-2.585z"/>
      </g>
    </Icon>
  );
}

IconSuccess.displayName = 'IconSuccess';
IconSuccess.category = 'alert';

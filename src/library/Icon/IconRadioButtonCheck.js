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
export default function IconRadioButtonCheck(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <circle cx="12" cy="12" r="3.43"/>
      </g>
    </Icon>
  );
}

IconRadioButtonCheck.displayName = 'IconRadioButtonCheck';
IconRadioButtonCheck.category = 'toggle';

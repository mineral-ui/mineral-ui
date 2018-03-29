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
export default function IconCallMade(props: Props) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
      </g>
    </Icon>
  );
}

IconCallMade.displayName = 'IconCallMade';
IconCallMade.category = 'communication';

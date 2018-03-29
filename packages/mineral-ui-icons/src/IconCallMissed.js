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
export default function IconCallMissed(props: Props) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"/>
      </g>
    </Icon>
  );
}

IconCallMissed.displayName = 'IconCallMissed';
IconCallMissed.category = 'communication';

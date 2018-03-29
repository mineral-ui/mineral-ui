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
export default function IconAssistantPhoto(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
      </g>
    </Icon>
  );
}

IconAssistantPhoto.displayName = 'IconAssistantPhoto';
IconAssistantPhoto.category = 'image';

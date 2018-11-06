/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconShortText(props: IconProps) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M4 9h16v2H4zm0 4h10v2H4z"/>
      </g>
    </Icon>
  );
}

IconShortText.displayName = 'IconShortText';
IconShortText.category = 'editor';

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
export default function IconFeaturedVideo(props: Props) {
  const iconProps = {
    rtl: true,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"/>
      </g>
    </Icon>
  );
}

IconFeaturedVideo.displayName = 'IconFeaturedVideo';
IconFeaturedVideo.category = 'av';

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
export default function IconWarning(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M13.414 2.718l7.868 7.868c.78.78.78 2.047 0 2.828l-7.868 7.868c-.78.78-2.047.78-2.828 0l-7.868-7.868a2.001 2.001 0 0 1 0-2.828l7.868-7.868c.78-.78 2.047-.78 2.828 0zM12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1-3.958V8h-2v5.042h2z"/>
      </g>
    </Icon>
  );
}

IconWarning.displayName = 'IconWarning';
IconWarning.category = 'alert';

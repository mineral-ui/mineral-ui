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
export default function {{componentName}}(props: Props) {
  const iconProps = {
    rtl: {{rtl}},
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        {{{svgChildren}}}
      </g>
    </Icon>
  );
}

{{componentName}}.displayName = '{{componentName}}';
{{componentName}}.category = '{{componentCategory}}';

/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function {{componentName}}(props: IconProps) {
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

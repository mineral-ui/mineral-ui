/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('span')(
  ({ theme }) => ({
    backgroundColor: theme.Sample_backgroundColor || 'lavender',
    color: theme.Sample_color || theme.color,
    display: 'inline-block',
    outline: `1px solid ${theme.borderColor}`,
    padding: theme.space_inset_sm
  })
);

export default function Sample(props: {}) {
  return <Root {...props}>Sample</Root>;
}

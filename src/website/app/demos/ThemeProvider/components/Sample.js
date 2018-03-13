/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../../styles';

const Root = createStyledComponent('span', ({ theme }) => ({
  backgroundColor: theme.Sample_backgroundColor || 'lavender',
  color: theme.Sample_color || theme.color_text,
  display: 'inline-block',
  outline: `1px solid ${theme.borderColor}`,
  padding: theme.space_inset_sm
}));

export default function Sample(props: {}) {
  return <Root {...props}>Sample</Root>;
}

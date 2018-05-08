/* @flow */
import React from 'react';
import { createStyledComponent } from '../../library/styles';

type Props = {
  children: React$Node,
  variant?: 'regular' | 'success' | 'warning' | 'danger'
};

const Root = createStyledComponent('span', ({ theme, variant }) => {
  const backgroundColor =
    variant === 'regular'
      ? theme.color_theme_60
      : theme[`backgroundColor_${variant}Primary`];

  return {
    backgroundColor,
    borderRadius: theme.borderRadius_1,
    bottom: '0.15em', // optical adjustment for middle vertical alignment
    color: theme.color_themePrimary,
    fontSize: theme.fontSize_mouse,
    padding: `${theme.space_stack_xs} ${theme.space_inset_sm}`,
    position: 'relative', // optical adjustment for middle vertical alignment
    textTransform: 'uppercase',
    whiteSpace: 'nowrap'
  };
});

export default function Label({
  children,
  variant = 'regular',
  ...restProps
}: Props) {
  const rootProps = { variant, ...restProps };

  return <Root {...rootProps}>{children}</Root>;
}

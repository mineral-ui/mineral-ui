/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';

type Props = {
  children: React$Node,
  includeLastChild?: boolean,
  marginRight?: string,
  marginBottom?: string
};

const Root = createStyledComponent(
  'div',
  ({ includeLastChild, marginRight, marginBottom }) => {
    if (includeLastChild) {
      return {
        '&[class] > *': {
          marginRight,
          marginBottom
        }
      };
    } else {
      return {
        '&[class] > *:not(:last-child)': {
          marginRight,
          marginBottom
        }
      };
    }
  }
);

export default function DemoLayout({
  children,
  marginBottom = '1rem',
  ...restProps
}: Props) {
  const rootProps = { marginBottom, ...restProps };
  return <Root {...rootProps}>{children}</Root>;
}

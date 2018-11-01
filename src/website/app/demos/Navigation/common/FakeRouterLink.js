/* @flow */
import React from 'react';

type Props = {
  children: React$Node,
  className?: string,
  'data-index'?: number,
  to: string
};

export default function FakeRouterLink({
  children,
  className,
  to,
  ...rest
}: Props) {
  const rootProps = {
    className,
    'data-index': rest['data-index'],
    href: to
  };

  return <a {...rootProps}>{children}</a>;
}

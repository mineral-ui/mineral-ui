/* @flow */
import React from 'react';
import _DemoLayout from '../../shared/DemoLayout';

type Props = {
  children: React$Node
};

export default function DemoLayout(props: Props) {
  return (
    <_DemoLayout
      includeLastChild
      marginBottom="0.5rem"
      marginRight="0.5rem"
      {...props}
    />
  );
}

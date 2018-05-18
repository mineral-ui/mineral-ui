/* @flow */
import React from 'react';
import _DemoLayout from '../../shared/DemoLayout';

type Props = {
  children: React$Node
};

export default function DemoLayout(props: Props) {
  return <_DemoLayout includeLastChild marginRight="1rem" {...props} />;
}

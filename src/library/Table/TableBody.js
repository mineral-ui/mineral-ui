/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';

type Props = {
  /** Rendered content must be TableRow */
  children: React$Node
};

const Root = createStyledComponent(
  'tbody',
  {},
  {
    displayName: 'TableBody',
    rootEl: 'tbody'
  }
);

/**
 * TableBody
 */
export default function TableBody(props: Props) {
  return <Root {...props} />;
}

/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import DialogRow from './DialogRow';

type Props = {
  /** TODO */
  children: React$Node
};

const Root = createStyledComponent(
  DialogRow,
  {
    position: 'static' // Inert style to avoid glamor "unexpected rule cache miss"
  },
  {
    displayName: 'DialogHeader',
    withProps: { element: 'header' }
  }
);

/**
 * DialogHeader - TODO
 */
export default function DialogHeader(props: Props) {
  return <Root {...props} />;
}

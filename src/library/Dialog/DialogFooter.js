/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import DialogRow from './DialogRow';

type Props = {
  /** Rendered DialogFooter content */
  children?: React$Node
};

const Root = createStyledComponent(
  DialogRow,
  {
    flex: '0 0 auto'
  },
  {
    displayName: 'DialogFooter',
    withProps: { element: 'footer' }
  }
);

/**
 * DialogFooter displays actionable content at the bottom of the
 * [Dialog](/components/dialog). Use it to wrap children like
 * [DialogActions](/components/dialog-actions).
 */
export default function DialogFooter(props: Props) {
  return <Root {...props} />;
}

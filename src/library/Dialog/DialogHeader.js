/* @flow */
import React, { cloneElement } from 'react';
import { createStyledComponent } from '../styles';
import { findByType } from '../utils/children';
import DialogRow from './DialogRow';
import DialogTitle from './DialogTitle';

type Props = {
  /**
   * Rendered Dialog title; use of [DialogTitle](/components/dialog-title) is
   * recommended
   */
  children?: React$Node,
  /** Rendered close button */
  closeButton?: React$Node,
  /** @Private */
  titleProps?: Object
};

const Root = createStyledComponent(
  DialogRow,
  {
    display: 'flex',
    flex: '0 0 auto',
    justifyContent: 'space-between'
  },
  {
    displayName: 'DialogHeader',
    withProps: { element: 'header' }
  }
);

/**
 * DialogHeader displays title content and an optional close button at the top
 * of the [Dialog](/components/dialog).
 */
export default function DialogHeader(props: Props) {
  const { children, closeButton, titleProps, ...rootProps } = props;

  let title = findByType(children, DialogTitle);
  if (title) {
    title = cloneElement(title, {
      ...titleProps,
      ...title.props
    });
  }

  return (
    <Root {...rootProps}>
      {title || children}
      {closeButton}
    </Root>
  );
}

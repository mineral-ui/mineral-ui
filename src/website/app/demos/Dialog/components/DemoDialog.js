/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../../library/styles';
import Dialog from '../../../../../library/Dialog';

const Root = createStyledComponent(
  Dialog,
  {
    position: 'static'
  },
  {
    displayName: 'DemoDialog'
  }
).withProps({
  closeOnClickOutside: false,
  closeOnEscape: false,
  isOpen: true,
  usePortal: false
});

export default function DemoDialog(props: Object) {
  return <Root {...props} />;
}

/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../../library/styles';
import { createThemedComponent } from '../../../../../library/themes';
import Dialog from '../../../../../library/Dialog';

const ThemedDialog = createThemedComponent(Dialog, {
  DialogContent_translateY: null
});

const Root = createStyledComponent(
  ThemedDialog,
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

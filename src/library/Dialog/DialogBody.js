/* @flow */
import React, { Component } from 'react';
import ModifiersContext from './ModifiersContext';
import { dialogBodyPropTypes } from './propTypes';
import {
  DialogBodyOverflowContainerWithShadows,
  DialogBodyRoot as Root
} from './styled';

import type { DialogBodyProps } from './types';

export default class DialogBody extends Component<DialogBodyProps> {
  static displayName = 'DialogBody';

  static propTypes = dialogBodyPropTypes;

  render() {
    const { children, ...restProps } = this.props;
    const rootProps = {
      ...restProps
    };
    const modifiers = {
      flip: {
        boundariesElement: 'window'
      },
      preventOverflow: {
        escapeWithReference: true
      }
    };

    return (
      <Root {...rootProps}>
        <DialogBodyOverflowContainerWithShadows>
          <ModifiersContext.Provider value={modifiers}>
            {children}
          </ModifiersContext.Provider>
        </DialogBodyOverflowContainerWithShadows>
      </Root>
    );
  }
}

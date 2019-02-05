/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import { Reference } from 'react-popper';
import withForwardRef from '../utils/withForwardRef';
import { PopoverTriggerWrapper } from './styled';

import type { PopoverTriggerProps } from './types';

class PopoverTrigger extends Component<PopoverTriggerProps> {
  static displayName = 'PopoverTrigger';

  render() {
    const { children, cursor, forwardedRef, ...restProps } = this.props;

    return (
      <Reference>
        {({ ref: popperRef }) => {
          const popoverTriggerWrapperProps = {
            cursor,
            ref: (node: ?HTMLElement) => {
              if (node !== null) {
                popperRef(node);
                forwardedRef && forwardedRef(node);
              }
            }
          };

          return (
            <PopoverTriggerWrapper {...popoverTriggerWrapperProps}>
              {cloneElement(Children.only(children), restProps)}
            </PopoverTriggerWrapper>
          );
        }}
      </Reference>
    );
  }
}

export default withForwardRef<
  React$Config<PopoverTriggerProps, *>,
  PopoverTrigger
>(PopoverTrigger);

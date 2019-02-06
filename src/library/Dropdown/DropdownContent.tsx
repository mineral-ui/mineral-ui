/* @flow */
import React, { Component } from 'react';
import withForwardRef from '../utils/withForwardRef';
import Popper from '../Popover/RtlPopper';
import { DropdownContentWrapper } from './styled';

import { DropdownContentProps } from './types';

class DropdownContent extends Component<DropdownContentProps> {
  static displayName = 'DropdownContent';

  render() {
    const {
      children,
      forwardedRef,
      modifiers,
      placement,
      positionFixed,
      ...restProps
    } = this.props;
    const popperProps = {
      modifiers,
      placement,
      positionFixed
    };

    return (
      <Popper {...popperProps}>
        {({ outOfBoundaries, placement, ref: popperRef, style }) => {
          const dropdownContentWrapperProps = {
            'data-placement': placement,
            'data-out-of-boundaries': outOfBoundaries || undefined,
            ref: (node: HTMLElement | null | undefined) => {
              forwardedRef && forwardedRef(node);
              popperRef(node);
            },
            style,
            ...restProps
          };

          return (
            <DropdownContentWrapper {...dropdownContentWrapperProps}>
              {children}
            </DropdownContentWrapper>
          );
        }}
      </Popper>
    );
  }
}

export default withForwardRef<DropdownContentProps>(DropdownContent);

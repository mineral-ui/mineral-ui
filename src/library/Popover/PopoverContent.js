/* @flow */
import React, { Component } from 'react';
import withForwardRef from '../utils/withForwardRef';
import PopoverArrow from './PopoverArrow';
import Popper from './RtlPopper';
import { PopoverContentWrapper, PopoverBlock, PopoverTitle } from './styled';
import { ARROW_SIZE } from './constants';

import type { PopoverContentProps } from './types';

class PopoverContent extends Component<PopoverContentProps> {
  static displayName = 'PopoverContent';

  render() {
    const {
      children,
      hasArrow,
      modifiers,
      placement,
      positionFixed,
      forwardedRef,
      subtitle,
      title,
      ...restProps
    } = this.props;

    const popperProps = {
      modifiers,
      placement,
      positionFixed
    };

    return (
      <Popper {...popperProps}>
        {({
          arrowProps,
          outOfBoundaries,
          placement,
          ref: popperRef,
          style
        }) => {
          const popoverContentWrapperProps = {
            'data-placement': placement,
            'data-out-of-boundaries': outOfBoundaries || undefined,
            ref: (node: ?HTMLElement) => {
              forwardedRef && forwardedRef(node);
              popperRef(node);
            },
            style,
            ...restProps
          };

          const popoverArrowProps = {
            size: ARROW_SIZE,
            placement,
            ...arrowProps
          };

          return (
            <PopoverContentWrapper {...popoverContentWrapperProps}>
              {title && (
                <PopoverTitle subtitle={subtitle}>{title}</PopoverTitle>
              )}
              <PopoverBlock>{children}</PopoverBlock>
              {hasArrow && <PopoverArrow {...popoverArrowProps} />}
            </PopoverContentWrapper>
          );
        }}
      </Popper>
    );
  }
}

export default withForwardRef<
  React$Config<PopoverContentProps, *>,
  PopoverContent
>(PopoverContent);

/* @flow */
import React, { Component } from 'react';
import PopoverArrow from './PopoverArrow';
import {
  PopoverContentRoot as Root,
  PopoverBlock,
  PopoverTitle
} from './styled';
import { ARROW_SIZE } from './constants';

import type { PopoverContentProps } from './types';

export default class PopoverContent extends Component<PopoverContentProps> {
  render() {
    const {
      children,
      hasArrow,
      placement,
      subtitle,
      title,
      ...restProps
    } = this.props;

    const rootProps = {
      placement,
      ...restProps
    };
    const popoverArrowProps = {
      size: ARROW_SIZE,
      placement
    };

    return (
      <Root {...rootProps}>
        {({ popperProps, restProps }) => {
          const wrapperProps = {
            ...popperProps,
            ...restProps
          };
          popoverArrowProps.placement = wrapperProps['data-placement'];

          return (
            <div {...wrapperProps}>
              {title && (
                <PopoverTitle subtitle={subtitle}>{title}</PopoverTitle>
              )}
              <PopoverBlock>{children}</PopoverBlock>
              {hasArrow && <PopoverArrow {...popoverArrowProps} />}
            </div>
          );
        }}
      </Root>
    );
  }
}

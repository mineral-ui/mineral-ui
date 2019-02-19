/* @flow */
import React, {
  Children,
  cloneElement,
  Component,
  isValidElement
} from 'react';
import { Reference } from 'react-popper';
import withForwardRef from '../utils/withForwardRef';
import { PopoverTriggerWrapper } from './styled';

import { PopoverTriggerProps } from './types';

class PopoverTrigger extends Component<PopoverTriggerProps> {
  static displayName = 'PopoverTrigger';

  render() {
    const { children, cursor, forwardedRef, ...restProps } = this.props;

    return (
      <Reference>
        {({ ref: popperRef }) => {
          const popoverTriggerWrapperProps = {
            cursor,
            ref: (node: HTMLElement | null | undefined) => {
              if (node !== null) {
                popperRef(node);
                forwardedRef && forwardedRef(node);
              }
            }
          };
          const child = Children.only(children);

          return (
            <PopoverTriggerWrapper {...popoverTriggerWrapperProps}>
              {isValidElement(child) ? cloneElement(child, restProps) : child}
            </PopoverTriggerWrapper>
          );
        }}
      </Reference>
    );
  }
}

export default withForwardRef<HTMLElement, PopoverTriggerProps>(PopoverTrigger);

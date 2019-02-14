/* @flow */
import React, { Component, cloneElement } from 'react';
import withForwardRef from '../utils/withForwardRef';
import { Button as Root, Content, Inner } from './styled';
import { ICON_SIZE, SIZE } from './constants';

import { buttonPropTypes } from './propTypes';
import { ButtonDefaultProps, ButtonProps } from './types';

class Button extends Component<ButtonProps> {
  static displayName = 'Button';

  static defaultProps: ButtonDefaultProps = {
    size: SIZE.large
  };

  static propTypes = buttonPropTypes;

  render() {
    const {
      children,
      disabled,
      forwardedRef,
      iconStart,
      iconEnd,
      size = Button.defaultProps.size,
      variant,
      ...restProps
    } = this.props;

    // [1] Necessary when rendering an `a` element, which doesn't use `disabled`
    const rootProps = {
      'aria-disabled': disabled, // [1]
      children,
      disabled,
      ref: forwardedRef,
      size,
      tabIndex: disabled ? -1 : undefined, // [1]
      variant,
      ...restProps
    };

    const startIcon = iconStart
      ? cloneElement(iconStart, { size: ICON_SIZE[size], key: 'iconStart' })
      : null;
    const endIcon = iconEnd
      ? cloneElement(iconEnd, { size: ICON_SIZE[size], key: 'iconEnd' })
      : null;

    return (
      <Root {...rootProps}>
        <Inner>
          {startIcon}
          {children && <Content size={size}>{children}</Content>}
          {endIcon}
        </Inner>
      </Root>
    );
  }
}

// @ts-ignore - Types of property 'propTypes' are incompatible
export default withForwardRef<ButtonProps>(Button);

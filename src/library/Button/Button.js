/* @flow */
import React, { Component, cloneElement } from 'react';
import memoizeOne from 'memoize-one';
import { createButtonRootNode, Content, Inner } from './styled';
import { ICON_SIZE, SIZE } from './constants';

import { buttonPropTypes } from './propTypes';
import type { ButtonDefaultProps, ButtonProps } from './types';

export default class Button extends Component<ButtonProps> {
  static displayName = 'Button';

  static defaultProps: ButtonDefaultProps = {
    element: 'button',
    size: SIZE.large,
    type: 'button'
  };

  static propTypes = buttonPropTypes;

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createButtonRootNode,
    (nextProps: ButtonProps, prevProps: ButtonProps) =>
      nextProps.element === prevProps.element
  );

  render() {
    const {
      children,
      disabled,
      iconStart,
      iconEnd,
      size = Button.defaultProps.size,
      type = Button.defaultProps.type,
      variant,
      ...restProps
    } = this.props;

    const rootProps = {
      disabled,
      size,
      tabIndex: disabled ? -1 : undefined,
      text: children,
      type,
      variant,
      ...restProps
    };

    const Root = this.getRootNode(this.props, Button.defaultProps);

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

/* @flow */
import React, { cloneElement, PureComponent } from 'react';
import memoizeOne from 'memoize-one';
import { pxToEm } from '../styles';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';
import {
  createMenuItemRootNode,
  MenuItemContent,
  MenuItemInner,
  MenuItemSecondaryText,
  MenuItemText
} from './styled';

import { menuItemPropTypes } from './propTypes';
import type {
  MenuItemDefaultProps,
  MenuItemPropGetter,
  MenuItemProps
} from './types';

const variantIcons = {
  danger: <IconDanger size={pxToEm(24)} />,
  success: <IconSuccess size={pxToEm(24)} />,
  warning: <IconWarning size={pxToEm(24)} />
};

export default class MenuItem extends PureComponent<MenuItemProps> {
  static displayName = 'MenuItem';

  static defaultProps: MenuItemDefaultProps = {
    element: 'div'
  };

  static propTypes = menuItemPropTypes;

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createMenuItemRootNode,
    (nextProps: MenuItemProps, prevProps: MenuItemProps) =>
      nextProps.element === prevProps.element
  );

  render() {
    const {
      children,
      iconEnd,
      iconStart,
      render,
      secondaryText,
      variant
    } = this.props;

    if (render) {
      return render({
        props: this.getItemProps(this.props)
      });
    }

    const Root = this.getRootNode(this.props, MenuItem.defaultProps);
    const rootProps = this.getItemProps(this.props);

    let startIcon = variant !== undefined && variant && variantIcons[variant];
    if (iconStart) {
      startIcon = cloneElement(iconStart, {
        size: pxToEm(24),
        key: 'iconStart'
      });
    }
    const endIcon =
      iconEnd && cloneElement(iconEnd, { size: pxToEm(24), key: 'iconEnd' });

    return (
      <Root {...rootProps}>
        <MenuItemInner>
          {startIcon}
          {(children || secondaryText) && (
            <MenuItemContent>
              <MenuItemText>{children}</MenuItemText>
              {secondaryText && (
                <MenuItemSecondaryText>{secondaryText}</MenuItemSecondaryText>
              )}
            </MenuItemContent>
          )}
          {endIcon}
        </MenuItemInner>
      </Root>
    );
  }

  getItemProps: MenuItemPropGetter = (props = {}) => {
    const { disabled, onClick, render, tabIndex, ...restProps } = props;

    return {
      ...(render ? restProps : {}),
      disabled,
      tabIndex: tabIndex !== undefined ? tabIndex : disabled ? '-1' : 0,
      ...(!render ? restProps : {}),
      ...(!disabled ? { onClick, onKeyDown: this.onKeyDown } : {})
    };
  };

  onKeyDown = (event: SyntheticKeyboardEvent<>) => {
    const { onClick } = this.props;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick && onClick(event);
    }
  };
}

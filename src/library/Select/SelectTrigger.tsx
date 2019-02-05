/* @flow */
import styled from '@emotion/styled';
import withProps from 'recompose/withProps';
import React, { Component } from 'react';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';
import { pxToEm } from '../styles';
import IconArrowDropdownUp from '../Icon/IconArrowDropdownUp';
import IconArrowDropdownDown from '../Icon/IconArrowDropdownDown';
import { SelectTriggerRoot as Root, Trigger, TriggerContent } from './styled';
import { SIZE } from './constants';

import type { SelectTriggerProps } from './types';

const variantIcons = {
  danger: <IconDanger />,
  success: <IconSuccess />,
  warning: <IconWarning />
};

const iconMarginMap = {
  small: 4,
  medium: 8,
  large: 8,
  jumbo: 14
};

const stopPropagation = (event: SyntheticEvent<*>) => event.stopPropagation();

export default class SelectTrigger extends Component<SelectTriggerProps> {
  static displayName = 'SelectTrigger';

  render() {
    const {
      disabled,
      isOpen,
      item,
      name,
      placeholder,
      readOnly,
      triggerRef,
      size = SIZE.large,
      variant,
      ...restProps
    } = this.props;

    const ArrowIcon = isOpen ? IconArrowDropdownUp : IconArrowDropdownDown;
    const Arrow = withProps({
      size:
        size === SIZE.small || size === SIZE.medium ? SIZE.medium : pxToEm(24)
    })(
      styled(ArrowIcon)({
        margin: pxToEm(iconMarginMap[size])
      })
    );

    const controlProps = {
      hasPlaceholder: !item,
      variant: item && item.variant
    };

    const inputProps = {
      name,
      onClick: stopPropagation, // Stop extra click Event in Edge from closing Select
      type: 'hidden',
      value: item ? item.value : ''
    };

    let rootProps = {
      afterItems: [
        <Arrow key="arrow" />,
        <input {...inputProps} key="input" />
      ],
      control: Trigger,
      controlProps,
      disabled,
      fauxControlRef: triggerRef,
      readOnly,
      selectedItemVariant: item && item.variant,
      size,
      variant,
      ...restProps
    };

    if (item) {
      const { iconEnd, iconStart, variant } = item;
      rootProps = {
        ...rootProps,
        iconEnd,
        iconStart: variant ? variantIcons[variant] : iconStart,
        item,
        variant: this.props.variant
      };
    }

    return (
      <Root {...rootProps}>
        <TriggerContent>{item ? item.text : placeholder}</TriggerContent>
      </Root>
    );
  }
}

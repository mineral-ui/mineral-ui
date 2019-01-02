/* @flow */
import React, { cloneElement } from 'react';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';
import {
  Control,
  FauxControlRoot as Root,
  Prefix,
  Suffix,
  Underlay
} from './styled';
import { ICON_SIZE, SIZE } from './constants';

import type { FauxControlProps, VariantIcons } from './types';

const variantIcons: VariantIcons = {
  danger: <IconDanger />,
  success: <IconSuccess />,
  warning: <IconWarning />
};

const getIcons = ({
  disabled,
  iconStart,
  iconEnd,
  readOnly,
  size,
  variant,
  variantIcons
}) => {
  if (disabled || readOnly) {
    return [];
  }

  const iconSize = size || SIZE.large;
  const startIcon =
    iconStart &&
    cloneElement(iconStart, {
      size: ICON_SIZE[iconSize],
      key: 'iconStart'
    });

  const endIconSource =
    iconEnd !== null && variant
      ? variantIcons[variant]
      : iconEnd
      ? iconEnd
      : null;

  const endIcon =
    endIconSource &&
    cloneElement(endIconSource, {
      size: ICON_SIZE[iconSize],
      key: 'iconEnd'
    });

  return [startIcon, endIcon];
};

export default function FauxControl({
  afterItems,
  beforeItems,
  children,
  control,
  controlProps: controlPropsIn,
  disabled,
  fauxControlRef,
  iconEnd,
  iconStart,
  prefix: prefixIn,
  size,
  readOnly,
  suffix: suffixIn,
  variant,
  ...restProps
}: FauxControlProps) {
  const rootProps = {
    disabled,
    ref: fauxControlRef,
    variant,
    ...restProps
  };

  const [startIcon, endIcon] = getIcons({
    disabled,
    iconStart,
    iconEnd,
    readOnly,
    size,
    variant,
    variantIcons
  });

  const prefixAndSuffixProps = {
    iconEnd,
    iconStart,
    size,
    variant
  };

  const prefix = prefixIn ? (
    <Prefix {...prefixAndSuffixProps} key="prefix">
      {prefixIn}
    </Prefix>
  ) : null;
  const suffix = suffixIn ? (
    <Suffix {...prefixAndSuffixProps} key="suffix">
      {suffixIn}
    </Suffix>
  ) : null;

  const controlProps = {
    as: control,
    controlPropsIn,
    ...controlPropsIn,
    children,
    disabled,
    iconEnd,
    iconStart,
    prefix: prefixIn,
    ref: controlPropsIn && controlPropsIn.controlRef,
    readOnly,
    ...(controlPropsIn && controlPropsIn.htmlSize
      ? { controlSize: size, size: controlPropsIn.htmlSize }
      : { size }),
    suffix: suffixIn,
    variant
  };

  const underlayProps = { disabled, readOnly, variant };

  return (
    <Root {...rootProps}>
      {beforeItems}
      {startIcon}
      {prefix}
      {<Control {...controlProps} key="control" />}
      {suffix}
      {endIcon}
      {afterItems}
      <Underlay {...underlayProps} />
    </Root>
  );
}

FauxControl.displayName = 'FauxControl';

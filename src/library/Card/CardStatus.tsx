/* @flow */
import React from 'react';
import IconDangerSimple from '../Icon/IconDangerSimple';
import IconSuccessSimple from '../Icon/IconSuccessSimple';
import IconWarningSimple from '../Icon/IconWarningSimple';
import { CardStatusRoot as Root } from './styled';

import { cardStatusPropTypes } from './propTypes';
import { CardStatusProps } from './types';

const variantIcons = {
  danger: IconDangerSimple,
  success: IconSuccessSimple,
  warning: IconWarningSimple
};

export default function CardStatus(props: CardStatusProps) {
  const { children, variant, ...restProps } = props;
  const rootProps = {
    variant,
    ...restProps
  };
  const VariantIcon = variantIcons[variant];

  return (
    <Root {...rootProps}>
      <VariantIcon />
      {children}
    </Root>
  );
}

CardStatus.displayName = 'CardStatus';
CardStatus.propTypes = cardStatusPropTypes;

/* @flow */
import React, {
  Children,
  cloneElement,
  createElement,
  isValidElement
} from 'react';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';
import {
  CardTitleRoot as Root,
  CardTitleAvatar as Avatar,
  CardTitleInner as Inner,
  CardTitleSecondaryText as SecondaryText,
  CardTitleSubtitle as Subtitle,
  CardTitleTitle as Title,
  CardTitleTitleContent as TitleContent
} from './styled';

import { cardTitlePropTypes } from './propTypes';
import { CardTitleProps } from './types';

const variantIcons = {
  danger: IconDanger,
  success: IconSuccess,
  warning: IconWarning
};

export default function CardTitle(props: CardTitleProps) {
  const {
    actions,
    avatar,
    children,
    secondaryText,
    subtitle,
    variant,
    ...restProps
  } = props;
  const rootProps = {
    ...restProps
  };

  const secondaryComponent = actions ? (
    Children.map(actions, (action, index) =>
      isValidElement(action) ? cloneElement(action, { key: index }) : action
    )
  ) : secondaryText ? (
    <SecondaryText>{secondaryText}</SecondaryText>
  ) : null;

  return (
    <Root {...rootProps}>
      {avatar && <Avatar subtitle={subtitle}>{avatar}</Avatar>}
      <Inner>
        <Title variant={variant}>
          {variant && createElement(variantIcons[variant], { size: 'medium' })}
          <TitleContent actions={actions}>{children}</TitleContent>
          {secondaryComponent}
        </Title>
        {subtitle && <Subtitle avatar={avatar}>{subtitle}</Subtitle>}
      </Inner>
    </Root>
  );
}

CardTitle.displayName = 'CardTitle';
CardTitle.propTypes = cardTitlePropTypes;

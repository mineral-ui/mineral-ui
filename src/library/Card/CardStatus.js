/* @flow */
import React from 'react';
import { createStyledComponent, pxToRem } from '../styles';
import IconDangerSimple from '../Icon/IconDangerSimple';
import IconSuccessSimple from '../Icon/IconSuccessSimple';
import IconWarningSimple from '../Icon/IconWarningSimple';
import CardRow from './CardRow';

type Props = {
  /** Status text */
  children: string,
  /** Available variants */
  variant: 'danger' | 'success' | 'warning'
};

export const componentTheme = (baseTheme: Object) => ({
  CardStatus_fontSize: baseTheme.fontSize_ui,
  CardStatus_fontWeight: baseTheme.fontWeight_regular,

  CardStatusIcon_margin: baseTheme.space_inline_sm,
  CardStatusIcon_size: pxToRem(12, baseTheme),

  ...baseTheme
});

const Root = createStyledComponent(
  CardRow,
  ({ theme: baseTheme, variant }) => {
    const theme = componentTheme(baseTheme);

    return {
      alignItems: 'center',
      color: theme[`color_${variant}`],
      display: 'flex',
      fontSize: theme.CardStatus_fontSize,
      fontWeight: theme.CardStatus_fontWeight,

      '& > [role="img"]': {
        height: theme.CardStatusIcon_size,
        [`margin${theme.rtlEnd}`]: theme.CardStatusIcon_margin,
        width: theme.CardStatusIcon_size
      }
    };
  },
  {
    displayName: 'CardStatus'
  }
);

const statusIcons = {
  danger: <IconDangerSimple />,
  success: <IconSuccessSimple />,
  warning: <IconWarningSimple />
};

/**
 * CardStatus provides a standard way of displaying a [Card's](/components/card) current status.
 */
export default function CardStatus(props: Props) {
  const { children, variant, ...restProps } = props;
  const rootProps = {
    variant,
    ...restProps
  };
  const icon = statusIcons[variant];

  return (
    <Root {...rootProps}>
      {icon}
      {children}
    </Root>
  );
}

/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../styles';
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
  CardStatusIcon_size: pxToEm(12),

  ...baseTheme
});

const Root = createStyledComponent(
  CardRow,
  ({ theme: baseTheme, variant }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    return {
      alignItems: 'center',
      color: theme[`color_text_${variant}`],
      display: 'flex',
      fontSize: theme.CardStatus_fontSize,
      fontWeight: theme.CardStatus_fontWeight,

      '& > [role="img"]': {
        fill: 'currentcolor',
        height: theme.CardStatusIcon_size,
        marginRight: rtl ? null : theme.CardStatusIcon_margin,
        marginLeft: rtl ? theme.CardStatusIcon_margin : null,
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
 * CardStatus provides a standard way of displaying a [Card's](../card) current status.
 */
export default function CardStatus({ children, variant, ...restProps }: Props) {
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

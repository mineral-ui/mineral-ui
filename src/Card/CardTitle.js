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
import React, { Children, cloneElement } from 'react';
import { ellipsis } from 'polished';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';
import CardRow from './CardRow';

type Props = {
  /** See the [Actions Menu](#actions-menu) example (will take precedence over `secondaryText`) */
  actions?: React$Node,
  /** Avatar image displayed beside the title */
  avatar?: string | React$Element<*>,
  /** Title of Card */
  children: React$Node,
  /** Information displayed beside the title (`actions` will take precedence over this) */
  secondaryText?: string | React$Element<*>,
  /** Subtitle displayed under the title */
  subtitle?: React$Node,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

export const componentTheme = (baseTheme: Object) => ({
  CardTitle_color: baseTheme.color_gray_80,
  CardTitle_fontSize: baseTheme.fontSize_h4,
  CardTitle_fontWeight: baseTheme.fontWeight_bold,

  CardTitleAvatar_margin: baseTheme.space_inline_sm,
  CardTitleAvatarSize: baseTheme.size_small,
  CardTitleAvatarSize_large: baseTheme.size_large,

  CardTitleIcon_margin: baseTheme.space_inline_sm,

  CardTitleSecondaryText_fontSize: baseTheme.fontSize_mouse,
  CardTitleSecondaryText_fontWeight: baseTheme.fontWeight_regular,

  CardSubtitle_color: baseTheme.color_gray_80,
  CardSubtitle_fontSize: baseTheme.fontSize_mouse,
  CardSubtitle_fontWeight: baseTheme.fontWeight_regular,
  CardSubtitle_marginTop: baseTheme.space_stack_sm,

  ...baseTheme
});

const styles = {
  avatar: ({ subtitle, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';
    const width = subtitle
      ? theme.CardTitleAvatarSize_large
      : theme.CardTitleAvatarSize;

    return {
      flex: '0 0 auto',
      marginLeft: rtl ? theme.CardTitleAvatar_margin : null,
      marginRight: rtl ? null : theme.CardTitleAvatar_margin,
      width,

      '&[class] > *': {
        height: 'auto',
        width: '100%'
      }
    };
  },
  inner: {
    flex: '1 1 auto'
  },
  secondaryText: props => {
    const theme = componentTheme(props.theme);
    const fontSize = theme.CardTitleSecondaryText_fontSize;

    return {
      flex: '0 0 auto',
      fontSize,
      fontWeight: theme.CardTitleSecondaryText_fontWeight,
      transform: `translateY(${getNormalizedValue(pxToEm(5), fontSize)})`, // Optical alignment
      ...ellipsis('33%')
    };
  },
  root: {
    display: 'flex'
  },
  subtitle: ({ avatar, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const fontSize = theme.CardSubtitle_fontSize;

    return {
      color: theme.CardSubtitle_color,
      fontSize,
      fontWeight: theme.CardSubtitle_fontWeight,
      margin: 0,
      marginTop: avatar
        ? null
        : getNormalizedValue(theme.CardSubtitle_marginTop, fontSize)
    };
  },
  title: ({ theme: baseTheme, variant }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    return {
      alignItems: 'flex-start',
      display: 'flex',

      '& > [role="img"]': {
        fill: variant ? theme[`color_text_${variant}`] : null,
        marginLeft: rtl ? theme.CardTitleIcon_margin : null,
        marginRight: rtl ? null : theme.CardTitleIcon_margin,
        position: 'relative',
        top: pxToEm(4) // optical alignment
      }
    };
  },
  titleContent: ({ actions, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';
    const fontSize = theme.CardTitle_fontSize;
    const actionsMargin = getNormalizedValue(
      theme.CardTitleIcon_margin,
      fontSize
    );

    return {
      color: theme.CardTitle_color,
      flex: '1 1 auto',
      fontSize,
      fontWeight: theme.CardTitle_fontWeight,
      margin: 0,
      marginLeft: actions && rtl ? actionsMargin : null,
      marginRight: actions && !rtl ? actionsMargin : null
    };
  }
};

const Root = createStyledComponent(CardRow, styles.root, {
  displayName: 'CardTitle'
});
const Avatar = createStyledComponent('span', styles.avatar);
const Inner = createStyledComponent('div', styles.inner);
const SecondaryText = createStyledComponent('span', styles.secondaryText);
const Subtitle = createStyledComponent('h4', styles.subtitle);
const Title = createStyledComponent('div', styles.title);
const TitleContent = createStyledComponent('h3', styles.titleContent);

const variantIcons = {
  danger: <IconDanger size="medium" />,
  success: <IconSuccess size="medium" />,
  warning: <IconWarning size="medium" />
};

/**
 * CardTitle displays a Card title and an optional subtitle.
 * You can put CardTitle in any order in relation to other root components of
 * [Card](../card).
 */
export default function CardTitle({
  actions,
  avatar,
  children,
  secondaryText,
  subtitle,
  variant,
  ...restProps
}: Props) {
  const rootProps = {
    ...restProps
  };

  const secondaryComponent = actions ? (
    Children.map(actions, (action, index) =>
      cloneElement(action, { key: index })
    )
  ) : secondaryText ? (
    <SecondaryText>{secondaryText}</SecondaryText>
  ) : null;

  return (
    <Root {...rootProps}>
      {avatar && <Avatar subtitle={subtitle}>{avatar}</Avatar>}
      <Inner>
        <Title variant={variant}>
          {variant && variantIcons[variant]}
          <TitleContent actions={actions}>{children}</TitleContent>
          {secondaryComponent}
        </Title>
        {subtitle && <Subtitle avatar={avatar}>{subtitle}</Subtitle>}
      </Inner>
    </Root>
  );
}

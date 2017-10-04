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
import { createStyledComponent, getNormalizedValue } from '../utils';
import { componentTheme as cardComponentTheme } from './Card';

type Props = {
  /** Information displayed above the title */
  meta?: string,
  /** Title of the Card */
  children: React$Node,
  /** Displays the title in a less important style */
  minor?: boolean,
  /** Subtitle displayed under the title */
  subtitle?: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  CardTitle_fontSize: baseTheme.fontSize_h3,
  CardTitle_fontSize_minor: baseTheme.fontSize_h4,
  CardTitle_fontWeight: baseTheme.fontWeight_semiBold,
  CardTitle_fontWeight_minor: baseTheme.fontWeight_bold,
  CardTitle_marginTop: baseTheme.space_stack_sm,

  CardSubtitle_color: baseTheme.color_gray_80,
  CardSubtitle_fontSize: baseTheme.fontSize_h5,
  CardSubtitle_fontWeight: baseTheme.fontWeight_semiBold,
  CardSubtitle_marginTop: baseTheme.space_stack_sm,

  ...baseTheme
});

const styles = {
  root: props => {
    const theme = {
      ...componentTheme(props.theme),
      ...cardComponentTheme(props.theme)
    };

    return {
      marginBottom: theme.CardRow_margin,
      marginTop: theme.CardRow_margin,
      paddingLeft: theme.CardRow_padding,
      paddingRight: theme.CardRow_padding,
      paddingTop: !props.minor && theme.CardTitle_marginTop
    };
  },
  meta: props => {
    const theme = componentTheme(props.theme);

    return {
      margin: `0 0 ${getNormalizedValue(
        theme.CardSubtitle_marginTop,
        theme.CardSubtitle_fontSize
      )}`
    };
  },
  subtitle: props => {
    const theme = componentTheme(props.theme);

    return {
      color: theme.CardSubtitle_color,
      fontSize: theme.CardSubtitle_fontSize,
      fontWeight: theme.CardSubtitle_fontWeight,
      margin: `${getNormalizedValue(
        theme.CardSubtitle_marginTop,
        theme.CardSubtitle_fontSize
      )} 0 0`
    };
  },
  title: props => {
    const theme = componentTheme(props.theme);

    return {
      fontSize: props.minor
        ? theme.CardTitle_fontSize_minor
        : theme.CardTitle_fontSize,
      fontWeight: props.minor
        ? theme.CardTitle_fontWeight_minor
        : theme.CardTitle_fontWeight,
      margin: 0
    };
  }
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'CardTitle'
});
const Subtitle = createStyledComponent('h4', styles.subtitle);
// CategoryTitle styles Subtitle, so it must break alphabetical order
const Meta = createStyledComponent(Subtitle, styles.meta);
const Title = createStyledComponent('h3', styles.title);

/**
 * CardTitle displays a Card title and an optional subtitle.
 * You can put CardTitle in any order in relation to other root components of [Card]('./card').
 */
export default function CardTitle({
  children,
  meta,
  minor,
  subtitle,
  ...restProps
}: Props) {
  const rootProps = {
    minor,
    ...restProps
  };
  const isMinor = minor || Boolean(meta);
  return (
    <Root {...rootProps}>
      {meta && <Meta>{meta}</Meta>}
      <Title minor={isMinor}>{children}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Root>
  );
}

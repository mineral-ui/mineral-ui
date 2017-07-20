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
import {
  createStyledComponent,
  getNormalizedValue
} from '@mineral-ui/component-utils';
import CardRow from './CardRow';
import cardTheme from './cardTheme';

type Props = {|
  /** Information displayed above the title */
  meta?: string,
  /** Title of the card */
  children: MnrlReactNode,
  /** Displays the title in a less important style */
  minor?: boolean,
  /** Subtitle displayed under the title */
  subtitle?: MnrlReactNode
|};

const styles = {
  root: (props, baseTheme) => {
    const theme = cardTheme(baseTheme);

    return {
      paddingTop: !props.minor && theme.CardTitle_marginTop
    };
  },
  meta: (props, baseTheme) => {
    const theme = cardTheme(baseTheme);

    return {
      margin: `0 0 ${getNormalizedValue(
        theme.CardSubtitle_marginTop,
        theme.CardSubtitle_fontSize
      )}`
    };
  },
  subtitle: (props, baseTheme) => {
    const theme = cardTheme(baseTheme);

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
  title: (props, baseTheme) => {
    const theme = cardTheme(baseTheme);

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

const Root = createStyledComponent(CardRow, styles.root, {
  displayName: 'CardTitle'
});
const Subtitle = createStyledComponent('h4', styles.subtitle);
// CategoryTitle styles Subtitle, so it must break alphabetical order
const Meta = createStyledComponent(Subtitle, styles.meta);
const Title = createStyledComponent('h3', styles.title);

/**
 * Card title component
 */
export default function CardTitle({ children, meta, minor, subtitle }: Props) {
  const isMinor = minor || Boolean(meta);
  return (
    <Root minor={minor}>
      {meta && <Meta>{meta}</Meta>}
      <Title minor={isMinor}>{children}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Root>
  );
}

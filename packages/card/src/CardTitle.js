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
  /** Rendered content of the component */
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
  }
};

const Root = createStyledComponent(CardRow, styles.root, {
  displayName: 'CardTitle'
});
const Title = createStyledComponent('h3', styles.title);
const Subtitle = createStyledComponent('h4', styles.subtitle);

/**
 * Card title component
 */
export default function CardTitle({ children, minor, subtitle }: Props) {
  return (
    <Root minor={minor}>
      <Title minor={minor}>{children}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Root>
  );
}

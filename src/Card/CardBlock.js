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
import { createStyledComponent } from '../styles';
import { componentTheme as cardComponentTheme } from './Card';
import CardRow from './CardRow';

type Props = {
  /** Contents of CardBlock */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  CardBlock_fontSize: baseTheme.fontSize_ui,
  CardBlock_lineHeight: baseTheme.lineHeight_prose,

  ...baseTheme
});

const styles = {
  inner: props => {
    const theme = componentTheme(props.theme);

    return {
      fontSize: theme.CardBlock_fontSize,
      lineHeight: theme.CardBlock_lineHeight
    };
  },
  root: props => {
    const theme = cardComponentTheme(props.theme);

    return {
      '&:last-child': {
        marginBottom: theme.CardRow_marginVerticalLast
      }
    };
  }
};

const Root = createStyledComponent(CardRow, styles.root, {
  displayName: 'CardBlock'
});
const Inner = createStyledComponent('div', styles.inner);

/**
 * CardBlock is used to normalize font sizes for content and to provide
 * consistent margins and padding.
 */
export default function CardBlock({ children, ...restProps }: Props) {
  return (
    <Root {...restProps}>
      <Inner>{children}</Inner>
    </Root>
  );
}

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

type Props = Object;

export const componentTheme = (baseTheme: Object) => ({
  CardDivider_borderColor: baseTheme.borderColor,
  CardDivider_borderWidth: '1px',

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  props => {
    const theme = {
      ...componentTheme(props.theme),
      ...cardComponentTheme(props.theme)
    };

    return {
      backgroundColor: theme.CardDivider_borderColor,
      height: theme.CardDivider_borderWidth,
      margin: `${theme.CardRow_marginVertical} 0`
    };
  },
  {
    displayName: 'CardDivider'
  }
);

/**
 * CardDividers separate content in [Card](../card) to establish hierarchy.
 *
 * Too many dividers will add unnecessary weight to your Card.
 */
export default function CardDivider(props: Props) {
  return <Root {...props} role="separator" />;
}

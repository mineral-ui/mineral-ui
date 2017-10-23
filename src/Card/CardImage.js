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

const Root = createStyledComponent(
  'img',
  props => {
    const theme = cardComponentTheme(props.theme);

    return {
      display: 'block',
      marginBottom: theme.CardRow_margin,
      marginTop: theme.CardRow_margin,
      maxWidth: '100%',

      '&:first-child': {
        borderRadius: `${theme.Card_borderRadius} ${theme.Card_borderRadius} 0 0`,
        marginTop: 0
      },

      '&:last-child': {
        borderRadius: `0 0 ${theme.Card_borderRadius} ${theme.Card_borderRadius}`,
        marginBottom: `-${theme.Card_paddingBottom}`
      }
    };
  },
  {
    displayName: 'CardImage',
    rootEl: 'img'
  }
);

/**
 * CardImage renders images full-bleed inside of a [Card](../card).
 * Use CardImage to display static media.
 */
export default function CardImage(props: Props) {
  return <Root {...props} />;
}

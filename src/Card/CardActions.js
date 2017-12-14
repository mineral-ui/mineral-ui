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
import { createStyledComponent, getNormalizedValue } from '../styles';
import Button from '../Button';
import { componentTheme as cardComponentTheme } from './Card';
import { componentTheme as cardBlockComponentTheme } from './CardBlock';
import CardRow from './CardRow';

type Props = {
  /** Actions associated with Card; see [Button](../button), [Link](../link) */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  CardActionsAction_spaceInline: baseTheme.space_inline_sm,

  ...baseTheme
});

const styles = {
  action: props => {
    const theme = {
      ...componentTheme(props.theme),
      ...cardBlockComponentTheme(props.theme)
    };
    const rtl = theme.direction === 'rtl';
    const fontSize = theme.CardBlock_fontSize;
    const actionsGap = getNormalizedValue(
      theme.CardActionsAction_spaceInline,
      fontSize
    );

    return {
      alignItems: 'center',
      display: 'flex',
      flex: '0 0 auto',
      fontSize,
      marginBottom: actionsGap,
      marginLeft: rtl ? null : actionsGap,
      marginRight: rtl ? actionsGap : null
    };
  },
  root: props => {
    const theme = {
      ...componentTheme(props.theme),
      ...cardComponentTheme(props.theme)
    };

    return {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      // We subtract `theme.CardActionsAction_spaceInline` because of the marginBottom on Action.
      marginBottom: `${parseFloat(theme.CardRow_marginVertical) -
        parseFloat(theme.CardActionsAction_spaceInline)}em`
    };
  }
};

const Root = createStyledComponent(CardRow, styles.root, {
  displayName: 'CardActions'
});
const Action = createStyledComponent('span', styles.action);

/**
 * The CardActions component allows you to lay out actions inside your [Card](../card).
 */
export default function CardActions({ children, ...restProps }: Props) {
  const actions = Children.map(children, (child, index) => {
    if (child.type === Button) {
      child = cloneElement(child, { size: 'medium' });
    }
    return <Action key={index}>{child}</Action>;
  });

  return <Root {...restProps}>{actions}</Root>;
}

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
import { createStyledComponent } from '../utils';

type Props = {
  /** Content of the Card. Can be anything, but see [CardBlock](../card-block), [CardImage](../card-image), and [CardTitle](../card-title). */
  children: React$Node,
  /** Called with the click event */
  onClick?: (event: SyntheticEvent<>) => void
};

export const componentTheme = (baseTheme: Object) => ({
  Card_backgroundColor: baseTheme.color_white,
  Card_borderRadius: baseTheme.borderRadius_1,
  Card_boxShadow: baseTheme.shadow_1,
  Card_boxShadow_focus: `0 0 0 2px ${baseTheme.color_theme_100}, ${baseTheme.shadow_1}`,
  Card_paddingBottom: baseTheme.space_stack_md,

  CardRow_margin: baseTheme.space_stack_md,
  CardRow_padding: baseTheme.space_inset_lg,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  props => {
    const theme = componentTheme(props.theme);

    return {
      backgroundColor: theme.Card_backgroundColor,
      borderRadius: theme.Card_borderRadius,
      boxShadow: theme.Card_boxShadow,
      cursor: props.onClick && 'pointer',
      paddingBottom: theme.Card_paddingBottom,
      paddingTop: '0.01em', // Necessary to prevent margin collapse of first-child

      '&:focus, &[data-simulate-focus]': {
        boxShadow: theme.Card_boxShadow_focus
      }
    };
  },
  {
    displayName: 'Card',
    includeStyleReset: true
  }
);

const onKeyPress = (props: Props, event: SyntheticEvent<>) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    props.onClick && props.onClick(event);
  }
};

/**
 * Cards are used to group conceptually related content.
 * Cards represent a gateway to more detailed information in another app view.
 * You can use Cards to provide detail about a feature in your app, or to represent data with which your users can interact.
 */
export default function Card(props: Props) {
  const rootProps = {
    onKeyPress: props.onClick ? onKeyPress.bind(null, props) : undefined,
    role: props.onClick ? 'button' : undefined,
    tabIndex: props.onClick ? 0 : undefined,
    ...props
  };
  return <Root {...rootProps} />;
}

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
import MenuGroupTitle from './MenuGroupTitle';

type Props = {
  /** [MenuItems](../menu-item) */
  children?: React$Node,
  /** Title for the group */
  title?: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  MenuGroup_margin: baseTheme.space_stack_sm,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  props => {
    const theme = componentTheme(props.theme);

    return {
      margin: `${theme.MenuGroup_margin} 0`,
      '&:first-child,& + &': {
        marginTop: 0
      },

      '&:last-child': {
        marginBottom: 0
      }
    };
  },
  {
    displayName: 'MenuGroup'
  }
);

/**
 * MenuGroups assemble [MenuItems](../menu-item) and can display a title.
 * Grouping Menu options provides context clues to users about related actions.
 * An optional title can be added to reinforce the intent of the grouping.
 */
export default function MenuGroup({ children, title, ...restProps }: Props) {
  return (
    <Root {...restProps}>
      {title && <MenuGroupTitle>{title}</MenuGroupTitle>}
      {children}
    </Root>
  );
}

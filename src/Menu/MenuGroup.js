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
import MenuGroupTitle from './MenuGroupTitle';

type Props = {
  /** [MenuItems](./menu-item) */
  children?: React$Node,
  /** Title for the group */
  title?: React$Node
};

const Root = createStyledComponent(
  'div',
  ({ theme }) => ({
    margin: `${theme.spacing_single} 0`,
    '&:first-child,& + &': {
      marginTop: 0
    },

    '&:last-child': {
      marginBottom: 0
    }
  }),
  {
    displayName: 'MenuGroup'
  }
);

/**
 * MenuGroups group together [Menu Items](./menu-items) and can display a title.
 */
export default function MenuGroup({ children, title, ...restProps }: Props) {
  return (
    <Root {...restProps}>
      {title && <MenuGroupTitle>{title}</MenuGroupTitle>}
      {children}
    </Root>
  );
}

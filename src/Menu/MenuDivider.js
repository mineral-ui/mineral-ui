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

type Props = Object;

export const componentTheme = (baseTheme: Object) => ({
  MenuDivider_borderColor: baseTheme.borderColor,
  MenuDivider_borderWidth: '1px',
  MenuDivider_margin: baseTheme.space_stack_sm,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  props => {
    const theme = componentTheme(props.theme);

    return {
      backgroundColor: theme.MenuDivider_borderColor,
      height: theme.MenuDivider_borderWidth,
      margin: `${theme.MenuDivider_margin} 0`
    };
  },
  {
    displayName: 'MenuDivider'
  }
);

/**
 * MenuDividers separate [MenuItems](../menu-item) and [MenuGroups](../menu-group) to establish hierarchy in a [Menu](../menu) with several options.
 *
 * MenuDividers are not merely design elements to visually separate options.
 * Rather, the are a way to logically group choices.
 * Too many dividers will add unnecessary weight to your Menu.
 */
export default function MenuDivider(props: Props) {
  return <Root {...props} role="separator" />;
}

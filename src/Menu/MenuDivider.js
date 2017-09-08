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
import { componentTheme as menuItemComponentTheme } from '../Menu/MenuItem';

type Props = Object;

export const componentTheme = (baseTheme: Object) => ({
  MenuDivider_height: baseTheme.spacing_single,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  props => {
    const theme = {
      ...componentTheme(props.theme),
      ...menuItemComponentTheme(props.theme)
    };

    return {
      backgroundColor: theme.MenuItem_backgroundColor,
      height: theme.MenuDivider_height
    };
  },
  {
    displayName: 'MenuDivider'
  }
);

/**
 * Menu divider component
 */
export default function MenuDivider(props: Props) {
  return <Root {...props} />;
}

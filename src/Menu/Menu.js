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
  /** [MenuItem](../menu-item)s */
  children: MnrlReactNode
};

export const componentTheme = (baseTheme: Object) => ({
  // Menu_backgroundColor: baseTheme.color_white,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  props => {
    const theme = componentTheme(props.theme);

    return {
      // backgroundColor: theme.Menu_backgroundColor
    };
  },
  {
    displayName: 'Menu',
    includeStyleReset: true
  }
);

/**
 * Menu component
 */
export default function Menu(props: Props) {
  return <Root {...props} />;
}

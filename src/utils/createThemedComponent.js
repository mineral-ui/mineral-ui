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
import { withTheme } from 'glamorous';
import ThemeProvider from '../ThemeProvider';

function getComponentDisplayName(Component: MnrlReactComponent): string {
  return typeof Component === 'string'
    ? Component
    : Component.displayName || Component.name || 'Component';
}

export default function createThemedComponent(
  ComponentToTheme: MnrlReactComponent,
  theme: Object | ((props: Object, context?: Object) => Object)
) {
  const ThemedComponent = (props, context) => {
    const outTheme =
      typeof theme === 'function' ? theme(props, context) : theme;

    return (
      <ThemeProvider theme={outTheme}>
        <ComponentToTheme {...props} />
      </ThemeProvider>
    );
  };

  ThemedComponent.propTypes = ComponentToTheme.propTypes;

  ThemedComponent.displayName = `Themed(${getComponentDisplayName(
    ComponentToTheme
  )})`;

  return withTheme(ThemedComponent);
}

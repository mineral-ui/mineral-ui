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
import React, { Component } from 'react';
import { ThemeProvider } from './index';

function getComponentDisplayName(Component: MnrlReactComponent): string {
  return typeof Component === 'string'
    ? Component
    : Component.displayName || Component.name || 'Component';
}

export default function createThemedComponent(
  ComponentToTheme: MnrlReactComponent,
  theme: Object
) {
  return class ThemedComponent extends Component {
    static displayName = `Themed(${getComponentDisplayName(ComponentToTheme)})`;

    static propTypes = ComponentToTheme.propTypes;

    render() {
      return (
        <ThemeProvider theme={theme}>
          <ComponentToTheme {...this.props} />
        </ThemeProvider>
      );
    }
  };
}

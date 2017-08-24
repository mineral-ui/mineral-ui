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
import Link from '@mineral-ui/link';
import { createStyledComponent, ThemeProvider } from '../../index';
import Sample from '../components/Sample';
import Prose from '../components/Prose';
import Code from '../components/Code';

const DemoLayout = createStyledComponent('div', {
  '& > *': {
    marginRight: '0.5rem'
  }
});

export default {
  id: 'theme-provider',
  title: <Code>{`<ThemeProvider theme>`}</Code>,
  description: (
    <Prose>
      <p>
        Wrap any number of components in a ThemeProvider to have those
        components reference the specified theme. That theme will be shallowly
        merged with the parent theme.
      </p>
      <p>
        <Code>theme</Code> — a shallow object of theme variables and their
        values (defaults to{' '}
        <Link href="https://github.com/mineral-ui/mineral-ui/blob/master/packages/component-utils/src/mineralTheme.js">
          mineralTheme
        </Link>)
      </p>
    </Prose>
  ),
  scope: { DemoLayout, ThemeProvider, Sample },
  source: `
    () => {
      return (
        <DemoLayout>
          {/* This will affect all components inside this ThemeProvider that use this variable. */}
          <ThemeProvider theme={{ color_primary: 'mediumvioletred' }}>
            <Sample />
          </ThemeProvider>

          {/* This will affect all components inside this ThemeProvider that use this variable,
              which should only be Sample components due to the namespace. */}
          <ThemeProvider theme={{ Sample_color: 'mediumvioletred' }}>
          	<Sample />
          </ThemeProvider>
        </DemoLayout>
      );
    }`
};

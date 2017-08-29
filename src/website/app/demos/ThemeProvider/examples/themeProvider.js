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
import { createStyledComponent } from '../../../../../utils';
import ThemeProvider from '../../../../../ThemeProvider';
// TODO: Extract shared components to common location
import Sample from '../../utils/components/Sample';
import Prose from '../../utils/components/Prose';

const DemoLayout = createStyledComponent('div', {
  '& > *': {
    marginRight: '0.5rem'
  }
});

export default {
  id: 'theme-provider',
  title: 'ThemeProvider',
  description: (
    <Prose>
      <p>
        Wrap any number of components in a ThemeProvider to have those
        components reference the specified theme. That theme will be shallowly
        merged with the parent theme.
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

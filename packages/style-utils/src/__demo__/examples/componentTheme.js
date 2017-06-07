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
import { ThemeProvider } from '../../index';
import Sample from '../../Sample';

function ComponentTheme() {
  return (
    <div>
      <ThemeProvider theme={{ Sample_color: 'mediumvioletred' }}>
        <Sample />
      </ThemeProvider>
    </div>
  );
}

export default {
  title: 'Component theme var override',
  component: ComponentTheme,
  description:
    'This will affect all components inside this ThemeProvider that use this variable, which should only be Sample components due to the namespace.',
  source: `<ThemeProvider theme={{ Sample_color: 'mediumvioletred' }}>
<Sample />
</ThemeProvider>`
};

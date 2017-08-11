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
import { ThemeProvider } from '../../index';
import Sample from '../components/Sample';

export default {
  title: 'Component theme var override',
  description:
    'This will affect all components inside this ThemeProvider that use this variable, which should only be Sample components due to the namespace.',
  scope: { ThemeProvider, Sample },
  source: `<ThemeProvider theme={{ Sample_color: 'mediumvioletred' }}>
  <Sample />
</ThemeProvider>`
};

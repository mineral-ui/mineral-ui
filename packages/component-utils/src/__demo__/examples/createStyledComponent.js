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
import { createStyledComponent } from '../../index';
import Sample from '../components/Sample';

export default {
  title: 'Style override via createStyledComponent',
  description:
    'If you need to use completely custom styles (which can still reference the props & theme) on a component.',
  scope: { createStyledComponent, Sample },
  source: `
    () => {
      const MyStyledSample = createStyledComponent(Sample, ({ theme }) => ({
        outline: '3px dashed mediumvioletred',
        fontSize: theme.fontSize_h1
      }));

      return <MyStyledSample />;
    }
  `
};

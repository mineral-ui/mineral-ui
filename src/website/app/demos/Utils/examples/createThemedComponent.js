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
import Link from '../../../../../components/Link';
import { createThemedComponent } from '../../../../../components/Utils';
import Sample from '../components/Sample';
import Prose from '../components/Prose';
import Code from '../components/Code';

export default {
  id: 'create-themed-component',
  title: <Code>createThemedComponent(component, theme)</Code>,
  description: (
    <Prose>
      <p>
        If you only need to style the themed properties of a component, you can
        use this helper. It’s effectively the same as wrapping a ThemeProvider
        around a single component.
      </p>
      <p>
        <Code>component</Code> — a{' '}
        <Link href="https://github.com/paypal/glamorous">Glamorous</Link>{' '}
        component
      </p>
      <p>
        <Code>theme</Code> — a shallow object of theme variables or a function
        that accepts props and context and returns an object of theme variables
      </p>
    </Prose>
  ),
  scope: { createThemedComponent, Sample },
  source: `
    () => {
      const MyThemedSample = createThemedComponent(Sample, {
        color_primary: 'mediumvioletred'
      });

      return <MyThemedSample />;
    }`
};

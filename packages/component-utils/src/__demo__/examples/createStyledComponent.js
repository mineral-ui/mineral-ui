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
import { createStyledComponent } from '../../index';
import Sample from '../components/Sample';
import Prose from '../components/Prose';
import Code from '../components/Code';

export default {
  id: 'create-styled-component',
  title: <Code>createStyledComponent(element, styles, options)</Code>,
  description: (
    <Prose>
      <p>This is how you apply arbitrary styles to a component.</p>
      <p>
        <Code>element</Code> — a React component or a string representation of
        an HTML element
      </p>
      <p>
        <Code>styles</Code> — an{' '}
        <Link href="https://github.com/threepointone/glamor/blob/master/docs/howto.md">
          object of style rules
        </Link>{' '}
        or a function that accepts props and context and returns an object of
        style rules
      </p>
      <p>
        <Code>options</Code> — An object of optional configuration. A mix of
        Mineral UI and{' '}
        <Link href="https://glamorous.rocks/api">Glamorous options</Link>. Most
        common uses are setting a display name on your component,{' '}
        <Code>{`{displayName: 'MyComponentName'}`}</Code>, declaring which props
        to forward on to the element,{' '}
        <Code>{`{forwardProps: [href, customProp]}`}</Code>, and including a
        style reset <Code>{`{ includeStyleReset: true }`}</Code>.
      </p>
    </Prose>
  ),
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

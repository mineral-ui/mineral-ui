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
import Sample from '../components/Sample';
import Code from '../components/Code';

export default {
  id: 'create-styled-component',
  title: <Code>createStyledComponent(element, styles, options)</Code>,
  description: `
This is how you apply arbitrary styles to a component.

\`element\` — a React component or a string representation of an HTML
element

\`styles\` — an
[object of style rules](https://github.com/threepointone/glamor/blob/master/docs/howto.md)
or a function that accepts props and context and returns an object of style
rules

\`options\` — An object of optional configuration. A mix of Mineral UI and
[Glamorous options](https://glamorous.rocks/api). Most common uses are
setting a display name on your component,
\`{ displayName: 'MyComponentName' }\`, declaring which props to forward
on to the element, \`{ forwardProps: [href, customProp] }\`, and including
a style reset \`{ includeStyleReset: true }\`.
  `,
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

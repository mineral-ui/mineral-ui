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
import { mount } from 'enzyme';
// $FlowFixMe
import { ThemeProvider } from '@mineral-ui/component-utils';
import { LiveProvider, LivePreview } from 'react-live';

type Example = {
  title: string,
  scope: Object,
  source: string
};
type Examples = Array<Example>;
type Options = {
  exclude?: Array<string> // Example title
};

export default function testDemoExamples(
  examples: Examples,
  options: Options = {}
) {
  if (options.exclude) {
    const exclusions = options.exclude || [];
    examples = examples.filter(example => !exclusions.includes(example.title));
  }

  return examples.map(example => {
    it(example.title, () => {
      const component = mount(
        <ThemeProvider>
          <LiveProvider
            code={example.source}
            scope={example.scope}
            mountStylesheet={false}>
            <LivePreview />
          </LiveProvider>
        </ThemeProvider>
      );
      expect(component).toMatchSnapshot();
    });
  });
}

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
import ThemeProvider from '../ThemeProvider';
import Sample from '../../website/app/demos/utils/components/Sample';
import examples from '../../website/app/demos/ThemeProvider/examples';
import testDemoExamples from '../../../utils/testDemoExamples';

function mountThemedSample(theme) {
  return mount(
    <ThemeProvider theme={theme}>
      <Sample />
    </ThemeProvider>
  );
}

describe('ThemeProvider', () => {
  it('renders correctly with default theme', () => {
    const themedSample = mountThemedSample();

    expect(themedSample).toMatchSnapshot();
  });

  it('merges nested theme variables', () => {
    const themedSample = mount(
      <ThemeProvider theme={{ color_primary: 'cyan' }}>
        <ThemeProvider theme={{ color_primary: 'mediumvioletred' }}>
          <Sample />
        </ThemeProvider>
      </ThemeProvider>
    );

    expect(themedSample).toMatchSnapshot();
  });

  it('merges themes instead of overriding', () => {
    const themedSample = mount(
      <ThemeProvider theme={{ color_primary: 'mediumvioletred' }}>
        <ThemeProvider theme={{ color_warning: 'tomato' }}>
          <Sample />
        </ThemeProvider>
      </ThemeProvider>
    );

    expect(themedSample).toMatchSnapshot();
  });

  testDemoExamples(examples);
});

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
import { mountInThemeProvider } from '../../../utils/enzymeUtils';
import { createThemedComponent } from '../index';
import Link from '../../Link';
import Sample from '../../website/app/demos/utils/components/Sample';
import examples from '../../website/app/demos/utils/examples';
import testDemoExamples from '../../../utils/testDemoExamples';

function mountThemedLink(theme) {
  const ThemedLink = createThemedComponent(Link, theme);

  return mountInThemeProvider(<ThemedLink />, true);
}

function mountThemedSample(theme) {
  const ThemedSample = createThemedComponent(Sample, theme);

  return mountInThemeProvider(<ThemedSample />, true);
}

describe('createThemedComponent', () => {
  it('renders correctly', () => {
    const themedSample = mountThemedSample({
      color_text: 'mediumvioletred'
    });

    expect(themedSample).toMatchSnapshot();
  });

  it('renders a Link correctly with a custom theme object', () => {
    const themedLink = mountThemedLink({
      Link_color: 'mediumvioletred'
    });

    expect(themedLink).toMatchSnapshot();
  });

  it('renders a Link correctly with a custom theme function', () => {
    const themedLink = mountThemedLink(({ theme }) => ({
      Link_color: theme.color_text_danger
    }));

    expect(themedLink).toMatchSnapshot();
  });

  testDemoExamples(examples, { exclude: ['sample-component'] });
});

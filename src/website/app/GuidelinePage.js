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
import { createStyledComponent } from '../../utils';

type Props = {
  children: React$Node
};

const Root = createStyledComponent('div', ({ theme }) => ({
  '& > div > h1 ~ p': {
    fontSize: theme.fontSize_h3,
    margin: `0 0 ${theme.lineHeight * 0.8}em`
  },
  // There might be more than one paragraph element in the Intro section.
  // marksy generates a flat-ish tree of elements, so body copy Ps are on the same level
  // as the intro paragraph.
  '& > div > h2 ~ p': {
    fontSize: theme.fontSize_prose,
    margin: `0 0 ${theme.lineHeight * 1.5}em`
  }
}));

export default function GuidelinePage({ children }: Props) {
  return <Root>{children}</Root>;
}

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
import { createStyledComponent } from '../../../../styles';
import Markdown from '../../Markdown';
import Legend from './Legend';
import content from './componentStatus.md';

type Props = {};

const Layout = createStyledComponent('div', ({ theme }) => ({
  '& table': {
    maxWidth: '40em'
  },
  '& th:last-child, & td:last-child': {
    textAlign: 'center',
    width: '6em'
  },
  // This will have to be updated if there are more intro paragraphs
  // in the markdown for this page
  '& p:nth-of-type(2)': {
    marginBottom: theme.space_stack_xxl,
    '@media(max-width: 45em)': {
      marginBottom: theme.space_stack_lg
    }
  }
}));

export default function ComponentStatus(props: Props) {
  return (
    <Layout {...props}>
      <Markdown scope={{ Legend }}>{content}</Markdown>
    </Layout>
  );
}

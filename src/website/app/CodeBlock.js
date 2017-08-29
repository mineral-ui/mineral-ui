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
import dedent from 'dedent';
import { createStyledComponent } from '../../utils';
import prism from './utils/prism';

type Props = {|
  children: string,
  language?: string
|};

const Pre = createStyledComponent('pre', ({ theme }) => ({
  fontSize: theme.fontSize_ui,
  maxHeight: `${parseFloat(theme.spacing_quad) * 10}em`,
  overflow: 'auto'
}));

export default function CodeBlock({ children, language }: Props) {
  return (
    <div>
      {language &&
        <em>
          {language}
        </em>}
      <Pre className="prism-code">
        <code dangerouslySetInnerHTML={{ __html: prism(dedent(children)) }} />
      </Pre>
    </div>
  );
}

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
import Heading from '../../Heading';
import Markdown from '../../Markdown';
import Section from '../../Section';

type Props = {|
  content: string
|};

export default function DocWhenHowToUse({ content }: Props) {
  return (
    <Section>
      <Heading level={2} id="when-how-to-use">
        When/How to Use
      </Heading>
      <Markdown>
        {content}
      </Markdown>
    </Section>
  );
}

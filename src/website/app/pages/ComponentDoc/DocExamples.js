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
import ComponentDocExample from '../../ComponentDocExample';
import Heading from '../../Heading';
import Section from '../../Section';

type Example = {
  backgroundColor?: string,
  description?: React$Node,
  hideFromProd?: boolean,
  hideSource?: boolean,
  id: string,
  propValues?: Object,
  scope: Object,
  source: string,
  title: React$Node
};

type Props = {
  examples: Array<Example>
};

export default function DocExamples({ examples }: Props) {
  if (process.env.NODE_ENV === 'production') {
    examples = examples.filter(example => !example.hideFromProd);
  }
  return (
    <Section>
      <Heading level={2}>Examples</Heading>
      {examples.map((example, index) => (
        <ComponentDocExample key={index} {...example} />
      ))}
    </Section>
  );
}

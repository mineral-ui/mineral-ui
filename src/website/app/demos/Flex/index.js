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
import bestPractices from './bestPractices';

import flexExamples from './examples/flex';
import flexItemExamples from './examples/flex-item';

const flexDoc = require('!!react-docgen-loader!../../../../Flex/Flex');
const flexItemDoc = require('!!react-docgen-loader!../../../../Flex/FlexItem');

export default [
  {
    bestPractices: bestPractices.flex,
    doc: flexDoc,
    examples: flexExamples,
    propsComment: (
      <p>
        In addition to the props above, Flex also accepts all props for{' '}
        <a href="../box" key={0}>
          Box
        </a>.
        <br key={1} />
        <br key={2} />
        <em key={3}>
          Undocumented properties will be applied to the root element.
        </em>
      </p>
    ),
    slug: 'flex',
    title: 'Flex',
    whenHowToUse: `Flex, together with [FlexItem](../flex-item), provides an
easy way to align components next to or on top of one another. With configurable
gutters, many alignment options, and optionally responsive properties, it is
powerful and flexible enough to be the foundation of your app's layout.`
  },
  {
    bestPractices: bestPractices.flexItem,
    doc: flexItemDoc,
    examples: flexItemExamples,
    propsComment: (
      <p>
        In addition to the props above, FlexItem also accepts all props for{' '}
        <a href="../box" key={0}>
          Box
        </a>.
        <br key={1} />
        <br key={2} />
        <em key={3}>
          Undocumented properties will be applied to the root element.
        </em>
      </p>
    ),
    slug: 'flex-item',
    title: 'FlexItem',
    whenHowToUse: `FlexItem, together with [Flex](../flex), provides an easy
way to align components next to or on top of one another. With many alignment
options and optionally responsive properties, it is powerful and flexible enough
to be the foundation of your app's layout.`
  }
];

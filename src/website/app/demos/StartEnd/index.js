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

import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../StartEnd/StartEnd');

export default {
  bestPractices,
  doc,
  examples,
  propsComment: (
    <p>
      In addition to the props above, StartEnd also accepts all props for{' '}
      <a href="../flex" key={0}>
        Flex
      </a>, <strong key={1}>except</strong> <code key={2}>justifyContent</code>{' '}
      and <code key={3}>wrap</code>.
      <br key={4} />
      <br key={5} />
      <em key={6}>
        Undocumented properties will be applied to the root element.
      </em>
    </p>
  ),
  slug: 'start-end',
  title: 'StartEnd',
  whenHowToUse: `StartEnd, as its name suggests, aligns content to the start
and end of a container. One side's content will fill the available width, while
the other will shrink to the smallest width possible.`
};

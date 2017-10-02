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
import Button from '../../../../Button';

export default [
  {
    type: 'do',
    title: 'use the appropriate variant for your intent',
    example: (
      <Button variant="danger" primary>
        Drop Users Table
      </Button>
    ),
    description: `Match Mineral UI's pre-defined Button variants with semantic purpose.`
  },
  {
    type: 'do',
    title: 'use clear labeling for button messaging',
    example: <Button primary>Save Changes</Button>,
    description: `Button actions should be predictable for frictionless interaction.
Exceptions would include "Ok", "Cancel", etc. which should be used sparingly.
Labels should be structured: \`<verb> <noun>\`.`
  },
  {
    type: 'dont',
    title: 'cause confusion with the wrong variant',
    example: (
      <Button variant="success" primary>
        Delete Database
      </Button>
    ),
    description:
      'Using the wrong variant can cause confusion, or undue stress for users.'
  },
  {
    type: 'dont',
    title: 'use "click me" or other vague messaging',
    example: <Button primary>Click Me</Button>,
    description:
      'Users should know exactly what will happen when they click a Button.'
  }
];

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
    description:
      'Use the [appropriate variant](/color/#guidelines-variants) for your intent.',
    example: (
      <Button variant="success" primary>
        Proceed to Checkout
      </Button>
    )
  },
  {
    type: 'dont',
    description:
      "Don't use a variant that differs from intent, as this will cause confusion.",
    example: (
      <Button variant="danger" primary>
        Continue
      </Button>
    )
  },
  {
    type: 'do',
    description: `Clearly label button actions to be predictable for
frictionless interaction. Exceptions would include "Ok", "Cancel", etc. which
should be used sparingly. Labels should be structured: \`<verb> <noun>\`.`,
    example: <Button primary>Save Changes</Button>
  },
  {
    type: 'dont',
    description: `Don't use "click me" or other vague messaging. Users should know
exactly what will happen when they click a Button.`,
    example: <Button primary>Click Me</Button>
  }
];

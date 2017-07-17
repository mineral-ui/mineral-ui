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
import { createStyledComponent } from '@mineral-ui/component-utils';
import Button from '../../Button';

export const Root = createStyledComponent('div', {
  '& > button': {
    marginRight: '0.5rem'
  }
});

export default {
  title: 'Danger',
  description: 'Use for destructive or potentially-dangerous actions.',
  scope: { Button, Root },
  source: `<Root>
  <Button variant="danger">Regular</Button>
  <Button variant="danger" primary>Primary</Button>
  <Button variant="danger" minimal>Minimal</Button>
</Root>`
};

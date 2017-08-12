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

const DemoLayout = createStyledComponent('div', {
  '& > button': {
    marginRight: '0.5rem'
  }
});

export default {
  title: 'Warning',
  description: 'Use for potentially-destructive actions.',
  scope: { Button, DemoLayout },
  source: `
    <DemoLayout>
      <Button variant="warning">Regular</Button>
      <Button variant="warning" primary>Primary</Button>
      <Button variant="warning" minimal>Minimal</Button>
    </DemoLayout>`
};

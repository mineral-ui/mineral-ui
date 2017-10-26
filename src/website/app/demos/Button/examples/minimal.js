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
import { createStyledComponent } from '../../../../../styles';
import Button from '../../../../../Button';

const DemoLayout = createStyledComponent('div', {
  '& > button': {
    marginRight: '0.5rem'
  }
});

export default {
  id: 'minimal',
  title: 'Minimal',
  description:
    'Use for less-important actions, or if there are a lot of other buttons on screen.',
  scope: { Button, DemoLayout },
  source: `<DemoLayout>
    <Button minimal>Default</Button>
    <Button variant="success" minimal>Success</Button>
    <Button variant="warning" minimal>Warning</Button>
    <Button variant="danger" minimal>Danger</Button>
    <Button disabled minimal>Disabled</Button>
  </DemoLayout>`
};

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
  id: 'primary',
  title: 'Primary Buttons',
  description: `Buttons trigger different actions around the page. Primary Buttons are used once per container, usually as the main call to action for the page.
    Overuse of primary buttons could make the interface feel too busy.`,
  scope: { Button, DemoLayout },
  source: `
    <DemoLayout>
      <Button primary>Default</Button>
      <Button variant="success" primary>Success</Button>
      <Button variant="warning" primary>Warning</Button>
      <Button variant="danger" primary>Danger</Button>
      <Button primary disabled>Disabled</Button>
    </DemoLayout>`
};

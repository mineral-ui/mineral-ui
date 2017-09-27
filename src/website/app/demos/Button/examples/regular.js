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
import { createStyledComponent } from '../../../../../utils';
import Button from '../../../../../Button';

const DemoLayout = createStyledComponent('div', {
  '& > button': {
    marginRight: '0.5rem'
  }
});

export default {
  id: 'default',
  title: 'Default',
  description: `Regular Buttons are good for secondary actions when grouped with another [primary](#primary) button.
These Buttons are not impactful enough to represent the primary action in a container.`,
  scope: { Button, DemoLayout },
  source: `
    <DemoLayout>
      <Button>Default</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button disabled>Disabled</Button>
    </DemoLayout>`
};

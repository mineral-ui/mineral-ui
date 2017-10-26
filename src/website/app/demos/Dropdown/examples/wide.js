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
import Dropdown from '../../../../../Dropdown';

const DemoLayout = createStyledComponent('div', {
  height: '210px'
});

const data = [
  {
    items: [
      {
        text: 'Light years star stuff'
      },
      {
        text: 'Harvesting star light citizens of distant epochs'
      },
      {
        text: 'Encyclopaedia galactica vastness is bearable'
      },
      {
        text: 'Shores of the cosmic ocean'
      }
    ]
  }
];

export default {
  id: 'wide',
  title: 'Wide',
  description: `Dropdown can display a wider menu (~50% wider).
Use this when there are MenuItems that wrap and look odd.
Make sure you have enough room for the wider Menu on the devices you're supporting.`,
  scope: { Button, data, DemoLayout, Dropdown },
  source: `
    <DemoLayout>
      <Dropdown wide isOpen data={data}>
        <Button>Menu</Button>
      </Dropdown>
    </DemoLayout>`
};

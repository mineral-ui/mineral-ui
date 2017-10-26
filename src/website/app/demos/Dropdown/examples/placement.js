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
import Button from '../../../../../Button';
import { createStyledComponent } from '../../../../../styles';
import Dropdown from '../../../../../Dropdown';
import data from '../../Menu/components/menuData';

const DemoLayout = createStyledComponent('div', {
  height: '400px',
  position: 'relative',

  '> div': {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
});

export default {
  id: 'placement',
  title: 'Placement',
  description: `The \`placement\` prop determines the initial placement of the Dropdown content relative to the trigger.
The Dropdown will react to viewport edges and scrolling.`,
  scope: { Button, data, DemoLayout, Dropdown },
  source: `
    <DemoLayout>
      <Dropdown
        placement="bottom-start"
        data={data}
        isOpen>
        <Button>Menu</Button>
      </Dropdown>
    </DemoLayout>`
};

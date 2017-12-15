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
import TextArea from '../../../../../TextArea';
import TextInput from '../../../../../TextInput';
import _DemoLayout from '../components/DemoLayout';

const DemoLayout = createStyledComponent(_DemoLayout, {
  '& > *': {
    alignItems: 'flex-start',
    display: 'flex',

    '& > div': {
      flex: '0 0 8rem',
      marginRight: '0.5rem'
    }
  }
});

export default {
  id: 'next-to-other-inputs',
  title: 'Placed Next to Other Inputs',
  hideFromProd: true,
  scope: { Button, DemoLayout, TextArea, TextInput },
  source: `
    <DemoLayout>
      <div>
        <TextArea size="small" defaultValue="Small" rows={1} />
        <TextArea size="small" defaultValue="Small" rows={1} autoSize />
        <TextInput size="small" defaultValue="Small" />
        <Button size="small">Small</Button>
      </div>
      <div>
        <TextArea size="medium" defaultValue="Medium" rows={1} />
        <TextArea size="medium" defaultValue="Medium" rows={1} autoSize />
        <TextInput size="medium" defaultValue="Medium" />
        <Button size="medium">Medium</Button>
      </div>
      <div>
        <TextArea defaultValue="Large" rows={1} />
        <TextArea defaultValue="Large" rows={1} autoSize />
        <TextInput defaultValue="Large" />
        <Button>Large</Button>
      </div>
      <div>
        <TextArea size="jumbo" defaultValue="Jumbo" rows={1} />
        <TextArea size="jumbo" defaultValue="Jumbo" rows={1} autoSize />
        <TextInput size="jumbo" defaultValue="Jumbo" />
        <Button size="jumbo">Jumbo</Button>
      </div>
    </DemoLayout>
  `
};

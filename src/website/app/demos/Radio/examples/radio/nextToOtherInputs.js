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
import { createStyledComponent } from '../../../../../../styles';
import Button from '../../../../../../Button';
import Radio from '../../../../../../Radio';
import TextInput from '../../../../../../TextInput';
import _DemoForm from '../../components/DemoForm';

const DemoForm = createStyledComponent(_DemoForm, {
  '& > *': {
    alignItems: 'center',
    display: 'flex',

    '& > *': {
      flex: '0 0 8rem',
      marginRight: '0.5rem'
    }
  }
});

export default {
  id: 'next-to-other-inputs',
  title: 'Placed Next to Other Inputs',
  hideFromProd: true,
  scope: { Button, DemoForm, Radio, TextInput },
  source: `
    <DemoForm>
      <div>
        <Radio name="size" size="small" label="Small" />
        <TextInput size="small" defaultValue="Small" />
        <Button size="small">Small</Button>
      </div>
      <div>
        <Radio name="size" size="medium" label="Medium" />
        <TextInput size="medium" defaultValue="Medium" />
        <Button size="medium">Medium</Button>
      </div>
      <div>
        <Radio name="size" label="Large" />
        <TextInput defaultValue="Large" />
        <Button>Large</Button>
      </div>
      <div>
        <Radio name="size" size="jumbo" label="Jumbo" />
        <TextInput size="jumbo" defaultValue="Jumbo" />
        <Button size="jumbo">Jumbo</Button>
      </div>
    </DemoForm>
  `
};

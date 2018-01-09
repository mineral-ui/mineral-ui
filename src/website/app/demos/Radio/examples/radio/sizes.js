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
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../Radio';

export default {
  id: 'sizes',
  title: 'Sizes',
  description: `Radio is available in a few sizes.`,
  scope: { DemoForm, Radio },
  source: `
    <DemoForm>
      <Radio name="size" label="Small" value="small" size="small" />
      <Radio name="size" label="Medium" value="medium" size="medium" />
      <Radio name="size" label="Large" value="large" defaultChecked />
      <Radio name="size" label="Jumbo" value="jumbo" size="jumbo" />
    </DemoForm>
  `
};

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
import { FormField } from '../../../../../Form';
import Select from '../../../../../Select';
import DemoLayout from '../components/DemoLayout';
import { statesData as data } from '../components/selectData';

export default {
  id: 'form-field',
  title: 'FormField',
  description: `Use a [FormField](../form-field) to provide an accessible label
and other features as well as a more streamlined API.`,
  scope: { data, DemoLayout, FormField, Select },
  source: `
    <DemoLayout>
      <FormField
        input={Select}
        data={data}
        name="state"
        placeholder="Choose a state..."
        label="State"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        required />
    </DemoLayout>
  `
};

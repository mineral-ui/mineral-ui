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
import DemoLayout from '../components/DemoLayout';
import Select from '../../../../../Select';
import { basicData as data } from '../components/selectData';

export default {
  id: 'variants',
  title: 'Variants',
  description: `is available in a few variants, mostly for use with
[validation](../form-field/#validation). Be sure to use the
[appropriate variant](/color#guidelines-variants) for your intent.`,
  scope: { data, DemoLayout, Select },
  source: `
    <DemoLayout>
      <Select data={data} variant="danger" />
      <Select data={data} variant="success" />
      <Select data={data} variant="warning" />
    </DemoLayout>
  `
};

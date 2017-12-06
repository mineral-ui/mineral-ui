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
import TextInput from '../../../../../TextInput';

export default {
  id: 'size',
  title: 'Available Sizes',
  description: `TextInput is available in a few sizes.`,
  scope: { DemoLayout, TextInput },
  source: `
    <DemoLayout>
      <TextInput size="small" defaultValue="Small" />
      <TextInput size="medium" defaultValue="Medium" />
      <TextInput defaultValue="Large" />
      <TextInput size="jumbo" defaultValue="Jumbo" />
    </DemoLayout>
  `
};

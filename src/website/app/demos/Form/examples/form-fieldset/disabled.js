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
import DemoLayout from '../../components/DemoLayout';
import TextInput from '../../../../../../TextInput';
import { FormField, FormFieldset } from '../../../../../../Form';

export default {
  id: 'disabled',
  title: 'Disabled',
  description:
    'If you disable a FormFieldset, be sure you also disable all child controls.',
  scope: { DemoLayout, FormField, FormFieldset, TextInput },
  source: `
    <FormFieldset legend="Login" disabled>
      <DemoLayout>
        <FormField label="Email">
          <TextInput type="email" disabled />
        </FormField>
        <FormField label="Password">
          <TextInput type="password" disabled />
        </FormField>
      </DemoLayout>
    </FormFieldset>
  `
};

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
import { FormField, FormFieldDivider } from '../../../../../../Form';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use a FormFieldDivider to create groups of
[FormFields](../form-field). For more semantic grouping, use a
[FormFieldset](../form-fieldset).`,
  scope: { DemoLayout, FormField, FormFieldDivider, TextInput },
  source: `
    <DemoLayout>
      <FormField label="Old Password">
        <TextInput type="password" />
      </FormField>

      <FormFieldDivider />

      <FormField label="New Password">
        <TextInput type="password" />
      </FormField>
      <FormField label="Repeat New Password">
        <TextInput type="password" />
      </FormField>
    </DemoLayout>
  `
};

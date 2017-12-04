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
  id: 'basic',
  title: 'Basic Usage',
  description: `Wrap any number of [FormFields](../form-field) in a FormFieldset
to group them together semantically. A brief, descriptive legend is especially
useful for users of Accessibility Technology (AT), such as a screen reader.`,
  scope: { DemoLayout, FormField, FormFieldset, TextInput },
  source: `
    <FormFieldset legend="Login">
      <DemoLayout>
        <FormField label="Email">
          <TextInput type="email" />
        </FormField>
        <FormField label="Password">
          <TextInput type="password" />
        </FormField>
      </DemoLayout>
    </FormFieldset>
  `
};

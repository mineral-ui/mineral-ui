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
import React from 'react';
import FormField from '../../../../Form/FormField';
import TextInput from '../../../../TextInput';
import DemoLayout from './components/DemoLayout';

export default [
  {
    type: 'do',
    description: `Wrap TextInput in a [FormField](../form-field) and provide a
brief, descriptive label.`,
    example: (
      <FormField label="Name">
        <TextInput />
      </FormField>
    )
  },
  {
    type: 'do',
    description: `Use a placeholder to hint the expected format.`,
    example: (
      <FormField label="Account Number">
        <TextInput placeholder="12345-123" />
      </FormField>
    )
  },
  {
    type: 'dont',
    description: `Don't use a \`placeholder\` as a field label. This is not
accessible and a poor experience.`,
    example: <TextInput placeholder="Name" />
  },
  {
    type: 'do',
    description: `Use a \`prefix\` or \`suffix\` to specify the expected units
for the input or other pertinent information.`,
    example: (
      <DemoLayout>
        <FormField label="Price">
          <TextInput type="number" prefix="$" />
        </FormField>
        <FormField label="Length">
          <TextInput type="number" suffix="cm" />
        </FormField>
        <FormField label="Phone Number">
          <TextInput type="tel" prefix="+1" placeholder="(555) 555-5555" />
        </FormField>
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    description: `Use a \`prefix\` or \`suffix\` as a field label.`,
    example: <TextInput prefix="Name" />
  },
  {
    type: 'do',
    description: `Use the appropriate type for the expected content. This is
especially useful on mobile devices, as a specialized keyboard will be used.`,
    example: (
      <DemoLayout>
        <FormField label="Name">
          <TextInput />
        </FormField>
        <FormField label="Date">
          <TextInput type="date" />
        </FormField>
        <FormField label="Quantity">
          <TextInput type="number" />
        </FormField>
        <FormField label="Phone Number">
          <TextInput type="tel" />
        </FormField>
        <FormField label="Website">
          <TextInput type="url" />
        </FormField>
      </DemoLayout>
    )
  }
];

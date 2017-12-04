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
import FormField from '../../../../../../Form/FormField';

export default {
  id: 'required',
  title: 'Required',
  description: `Marking a FormField as required will display the \`requiredText\`
and pass along the \`required\` prop to the child input.`,
  scope: { DemoLayout, FormField, TextInput },
  source: `
    <DemoLayout>
      <FormField
        label="Name"
        required>
        <TextInput />
      </FormField>

      <FormField
        label="Nombre"
        required
        requiredText="Necesario">
        <TextInput />
      </FormField>
    </DemoLayout>
  `
};

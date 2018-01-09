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
import TextArea from '../../../../../../TextArea';
import TextInput from '../../../../../../TextInput';
import FormField from '../../../../../../Form/FormField';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `FormField accepts any input, either to the \`input\` prop or
\`children\`, accessibly connecting the label to it.`,
  scope: { DemoLayout, FormField, TextArea, TextInput },
  source: `
    <DemoLayout>
      {/* Use the "input" prop for a streamlined approach. */}
      <FormField input={TextInput} label="Name" />

      {/* Or use "children", if you prefer. */}
      <FormField label="Description">
        <TextArea />
      </FormField>
    </DemoLayout>
  `
};

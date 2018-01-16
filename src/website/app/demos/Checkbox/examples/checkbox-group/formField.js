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
import { CheckboxGroup } from '../../../../../../Checkbox';
import { FormField } from '../../../../../../Form';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'form-field',
  title: 'FormField',
  description: `Use a [FormField](../form-field) to provide an accessible label
and other features as well as a more streamlined API.

_Note: The \`invalid\` and \`required\` props are not automatically forwarded
to Checkboxes because doing so might not do what the author expects (marking
**all** Checkboxes as invalid or required).  These props can, however, be set
using the \`data\` prop._`,
  scope: { CheckboxGroup, DemoForm, FormField },
  source: `
    <DemoForm>
      <FormField
        input={CheckboxGroup}
        label="What are the primary characteristics of a mineral?"
        caption="Hint: All of the above"
        name="contact"
        variant="success"
        required
        data={[
          { label: 'Naturally occurring', value: 'natural' },
          { label: 'Inorganic', value: 'inorganic' },
          { label: 'Solid', value: 'solid' },
          { label: 'Definite chemical composition', value: 'composition' },
          { label: 'Crystalline structure', value: 'crystalline' }
        ]} />
    </DemoForm>
  `
};

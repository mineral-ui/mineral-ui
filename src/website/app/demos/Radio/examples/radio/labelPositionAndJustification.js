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
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../Radio';
import { FormFieldDivider } from '../../../../../../Form';

export default {
  id: 'label-position-and-justification',
  title: 'Label Position & Justification',
  description: `Use the \`labelPosition\` prop to adjust the position of the
control relative to the label. Use the \`justify\` prop to maximize the space
between the label and the control.  These props are often useful when used in
tandem with one another.`,
  scope: { DemoForm, FormFieldDivider, Radio },
  source: `
    <DemoForm>
      <Radio name="mineral" label="Quartz" value="quartz" />
      <FormFieldDivider />
      <Radio name="mineral" label="Magnetite" value="magnetite" labelPosition="start" />
      <FormFieldDivider />
      <Radio name="mineral" label="Azurite" value="azurite" justify />
      <FormFieldDivider />
      <Radio name="mineral" label="Hematite" value="hematite" labelPosition="start" justify />
    </DemoForm>
  `
};

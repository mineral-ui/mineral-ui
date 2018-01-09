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
import Radio, { RadioGroup } from '../../../../../../Radio';
import { FormFieldDivider } from '../../../../../../Form';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'uncontrolled',
  title: 'Uncontrolled',
  description: `Create an uncontrolled RadioGroup by using the
\`defaultChecked\` prop rather than the \`checked\` prop. Use either the
\`data\` prop or \`children\` to construct a group of Radios.`,
  scope: { DemoForm, FormFieldDivider, Radio, RadioGroup },
  source: `
    <DemoForm>
      {/* Use the "data" prop for a streamlined approach. */}
      <RadioGroup
        name="minerals-1"
        defaultChecked="quartz"
        data={[
          { label: 'Flourite', value: 'flourite' },
          { label: 'Magnetite', value: 'magnetite' },
          { label: 'Quartz', value: 'quartz' }
        ]} />

      <FormFieldDivider />

      {/* Or use "children", if you prefer. */}
      <RadioGroup name="minerals-2" defaultChecked="pyrite">
        <Radio label="Azurite" value="azurite" />
        <Radio label="Hematite" value="hematite" />
        <Radio label="Pyrite" value="pyrite" />
      </RadioGroup>
    </DemoForm>
  `
};

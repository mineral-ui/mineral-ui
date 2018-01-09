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
import DemoForm from '../../components/DemoForm';

export default {
  id: 'inline',
  title: 'Inline',
  description: `Use the \`inline\` prop to display choices inline horizontally
rather than stacked vertically.`,
  scope: { DemoForm, Radio, RadioGroup },
  source: `
    <DemoForm>
      <RadioGroup
        name="minerals"
        defaultChecked="quartz"
        data={[
          { label: 'Flourite', value: 'flourite' },
          { label: 'Magnetite', value: 'magnetite' },
          { label: 'Quartz', value: 'quartz' }
        ]}
        inline />
    </DemoForm>
  `
};

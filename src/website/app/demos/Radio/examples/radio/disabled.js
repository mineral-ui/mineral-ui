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
import Radio from '../../../../../../Radio';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `Use the disabled prop to indicate that the Radio is not
available for interaction.`,
  scope: { DemoForm, Radio },
  source: `
    <DemoForm>
      <Radio label="Quartz" value="quartz" disabled />
      <Radio label="Magnetite" value="magnetite" defaultChecked disabled />
    </DemoForm>
  `
};

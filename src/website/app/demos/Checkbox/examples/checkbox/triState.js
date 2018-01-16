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
import Checkbox from '../../../../../../Checkbox';

export default {
  id: 'tri-state',
  title: 'Tri-state',
  description: `Checkbox supports three different states, namely unchecked,
checked, and indeterminate.`,
  scope: { DemoForm, Checkbox },
  source: `
    <DemoForm>
      <Checkbox name="states" label="Unchecked" value="unchecked" />
      <Checkbox name="states" label="Checked" value="checked" defaultChecked />
      <Checkbox name="states" label="Indeterminate" value="indeterminate" defaultChecked indeterminate />
    </DemoForm>
  `
};

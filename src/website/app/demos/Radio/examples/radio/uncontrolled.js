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

export default {
  id: 'uncontrolled',
  title: 'Uncontrolled',
  description: `Uncontrolled Radios behave just like their HTML input
counterparts wherein the checked state is handled by the DOM.  The only
difference is that \`defaultChecked\` must be used to set the initial state
rather than \`checked\`.`,
  scope: { DemoForm, Radio },
  source: `
    <DemoForm>
      <Radio name="mineral" label="Quartz" value="quartz" defaultChecked />
      <Radio name="mineral" label="Magnetite" value="magnetite" />
    </DemoForm>
  `
};

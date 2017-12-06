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
import DemoLayout from '../components/DemoLayout';
import TextInput from '../../../../../TextInput';

export default {
  id: 'uncontrolled',
  title: 'Uncontrolled',
  description: `Uncontrolled TextInputs behave just like HTML input elements.  The
value is handled by the DOM.  The only difference is that \`defaultValue\`
must be used to set the initial value rather than \`value\`.`,
  scope: { DemoLayout, TextInput },
  source: `
    <DemoLayout>
      <TextInput />
      <TextInput name="greeting" defaultValue="Hello World" />
    </DemoLayout>
  `
};

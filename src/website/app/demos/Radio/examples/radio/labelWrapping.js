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

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare velit nec dui molestie posuere. Nulla facilisi. Nulla tempor turpis vel aliquam viverra. In eu sagittis elit. Integer scelerisque purus nulla, sit amet dictum ipsum elementum finibus. Suspendisse et erat nisl. Sed aliquet finibus odio, ut volutpat metus dictum sed. Nullam nunc mi, consequat sit amet magna ut, faucibus placerat tortor. Duis porttitor tellus vitae condimentum convallis.`;

export default {
  id: 'label-wrapping',
  title: 'Label Wrapping',
  description: `This example demonstrates how the text of a long label will wrap
in relation to the position of the Radio.`,
  scope: { DemoForm, loremIpsum, Radio },
  source: `
    <DemoForm>
      <Radio name="example" label={loremIpsum} defaultChecked />
    </DemoForm>
  `
};

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
import TextArea from '../../../../../TextArea';

export default {
  id: 'size',
  title: 'Available Sizes',
  description: `TextArea is available in a few different sizes.  Note that the
\`rows\` prop is complementary to \`size\` and can be used to adjust the number
of lines displayed. See the [Rows](#rows) example for more details.`,
  scope: { DemoLayout, TextArea },
  source: `
    <DemoLayout>
      <TextArea size="small" defaultValue="Small" />
      <TextArea size="medium" defaultValue="Medium" />
      <TextArea defaultValue="Large" />
      <TextArea size="jumbo" defaultValue="Jumbo" />
    </DemoLayout>
  `
};

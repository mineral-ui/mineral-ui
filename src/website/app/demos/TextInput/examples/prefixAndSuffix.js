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
import TextInput from '../../../../../TextInput';
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'prefix-and-suffix',
  title: 'Prefix & Suffix',
  description: `TextInputs can have a prefix and/or suffix, most commonly used
for specifying units.`,
  scope: { DemoLayout, IconCloud, TextInput },
  source: `
  () => {
    const icon = <IconCloud />;

    return(
      <DemoLayout>
        <TextInput type="number" prefix="$" />
        <TextInput type="number" suffix="cm" />
      </DemoLayout>
    );
  }`
};

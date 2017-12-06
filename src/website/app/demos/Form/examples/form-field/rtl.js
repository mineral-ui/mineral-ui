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
import IconBackspace from 'mineral-ui-icons/IconBackspace';
import { ThemeProvider } from '../../../../../../themes';
import TextInput from '../../../../../../TextInput';
import FormField from '../../../../../../Form/FormField';

// Note: The sample text used in the example is Arabic and translates to "Hello World"
// https://translate.google.com/#auto/ar/Hello%20World

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `FormFields support right-to-left (RTL) languages.`,
  scope: { FormField, IconBackspace, TextInput, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <FormField label="مرحبا بالعالم" required requiredText="مطلوب">
          <TextInput iconStart={<IconBackspace />} defaultValue="مرحبا بالعالم" />
        </FormField>
      </ThemeProvider>
    </div>`
};

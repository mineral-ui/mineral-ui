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
import { ThemeProvider } from '../../../../../../themes';
import Checkbox from '../../../../../../Checkbox';
import { FormFieldDivider } from '../../../../../../Form';
import DemoForm from '../../components/DemoForm';

/*
 * Note: The sample text used in the example is Arabic.
 *  defaultValue: Hello World
 */

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Checkboxes support right-to-left (RTL) languages.`,
  scope: { Checkbox, DemoForm, FormFieldDivider, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <DemoForm>
          <Checkbox name="example" label="مرحبا بالعالم"  />
          <Checkbox name="example" label="مرحبا بالعالم"  labelPosition="start" />
          <FormFieldDivider />
          <Checkbox name="example" label="مرحبا بالعالم"  justify />
          <Checkbox name="example" label="مرحبا بالعالم"  labelPosition="start" justify />
        </DemoForm>
      </ThemeProvider>
    </div>`
};

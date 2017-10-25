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
import { ThemeProvider } from '../../../../../themes';
import Button from '../../../../../Button';
import IconBackspace from '../../../../../Icon/IconBackspace';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Buttons support right-to-left (RTL) languages.
Buttons with Icons are reversed when the \`direction\` theme variable is set to \`rtl\`.
A subset of Icons that [convey directionality](../icon#rtl) will be reversed.`,
  scope: { Button, IconBackspace, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Button iconStart={<IconBackspace />}>قم بعمل ما</Button>
      </ThemeProvider>
    </div>`
};

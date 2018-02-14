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
import Box from '../../Box/components/Box';
import StartEnd from '../components/StartEnd';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `StartEnd reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: { Box, StartEnd, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <StartEnd>
          <Box>بداية</Box>
          <Box>النهاية</Box>
        </StartEnd>
      </ThemeProvider>
    </div>`
};

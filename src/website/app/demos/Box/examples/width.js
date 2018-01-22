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
import Box from '../components/Box';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'width',
  title: 'Width',
  description: `By default, (unless the [\`inline\` prop](#inline) is set to
\`true\`), Box will fill the available width. Set the \`width\` prop to define a
width instead.

_Numbers < 1, e.g. \`1/2\`, will be converted to a percentage. Numbers ≥ 1 will
be appended with \`px\`. String values, e.g. \`"4em"\` or \`"20%"\`, will be
passed directly._`,
  scope: { DemoLayout, Box },
  source: `
    <DemoLayout>
      <Box width="10em">A</Box>
      <Box width={100}>B</Box>
      <Box width={1/3}>C</Box>
    </DemoLayout>`
};

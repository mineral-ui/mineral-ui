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
import { createStyledComponent } from '../../../../../styles';
import Box from '../components/Box';
import _DemoLayout from '../components/DemoLayout';

const DemoLayout = createStyledComponent(_DemoLayout, {
  '& > *[class]': {
    marginBottom: 0
  }
});

export default {
  id: 'inline',
  title: 'Inline',
  description: `By default, Box renders as a block-level element. Use \`inline\`
to render as inline-block.`,
  scope: { DemoLayout, Box },
  source: `
    <DemoLayout>
      <Box inline>A</Box>
      <Box inline width={100}>B</Box>
      <Box inline>C</Box>
    </DemoLayout>`
};

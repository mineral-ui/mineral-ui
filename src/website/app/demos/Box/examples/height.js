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
  '& > *': {
    float: 'left',
    width: '30%',

    '&[class]': {
      marginBottom: 0
    },

    '&:not(:last-child)': {
      marginRight: '5%'
    }
  }
});

export default {
  id: 'height',
  title: 'Height',
  description: `By default, Box will stretch in height to fit its contents. Set
the \`height\` prop to define a height instead.

_Numbers < 1, e.g. \`1/2\`, will be converted to a percentage. Numbers ≥ 1 will
be appended with \`px\`. String values, e.g. \`"4em"\` or \`"20%"\`, will be
passed directly._`,
  scope: { DemoLayout, Box },
  source: `
    <DemoLayout>
      <Box height="10em">A</Box>
      <Box height={100}>B</Box>
      <Box height={1/3}>C</Box>
    </DemoLayout>`
};

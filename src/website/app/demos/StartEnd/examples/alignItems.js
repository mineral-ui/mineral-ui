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
import Box from '../../Box/components/Box';
import DemoLayout from '../components/DemoLayout';
import _StartEnd from '../components/StartEnd';

const StartEnd = createStyledComponent(_StartEnd, {
  height: '5rem'
});

export default {
  id: 'align-items',
  title: 'Align Items',
  description: `The \`alignItems\` prop defines the alignment of items along
the cross axis (vertical, if \`direction\` is \`row\`; horizontal, if
\`direction\` is \`column\`).`,
  scope: { DemoLayout, Box, StartEnd },
  source: `
    () => {
      const propValues = [
        'stretch', // default
        'start',
        'center',
        'end'
      ];

      const renderStartEnds = () =>
        propValues.map((value, index) => (
          <StartEnd alignItems={value} key={index}>
            <Box>Start</Box>
            <Box>End</Box>
          </StartEnd>
        ));

      return <DemoLayout>{renderStartEnds()}</DemoLayout>;
    }`
};

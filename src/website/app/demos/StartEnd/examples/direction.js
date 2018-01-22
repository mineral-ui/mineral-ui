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
import Box from '../../Box/components/Box';
import StartEnd from '../components/StartEnd';

export default {
  id: 'direction',
  title: 'Direction',
  description: `While the primary purpose of StartEnd is to arrange its children
on the left/right of a container, changing \`direction\` to \`column\` can be
helpful in [responsive scenarios](#responsive).`,
  scope: { Box, StartEnd },
  source: `
    <StartEnd direction="column">
      <Box>Start</Box>
      <Box>End</Box>
    </StartEnd>`
};

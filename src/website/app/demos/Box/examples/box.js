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
  id: 'basic',
  title: 'Basic Usage',
  description: 'Use Box to easily apply margin, padding, and/or width.',
  scope: { DemoLayout, Box },
  source: `
    <DemoLayout>
      <Box>A</Box>
      <Box padding="lg">B</Box>
      <Box marginRight="50%">C</Box>
      <Box marginHorizontal="auto" width="10em">D</Box>
    </DemoLayout>`
};

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
import Box from '../../../Box/components/Box';
import FlexItem from '../../components/FlexItem';
import Flex from '../../components/Flex';

export default {
  id: 'box-props',
  title: 'Box Props',
  description: `Because Flex styles the [Box](../box) component, it accepts any
of [Box's props](../box/#props).`,
  scope: { Box, Flex, FlexItem },
  source: `
    <div>
      {/* You can apply Box props directly to Flex: */}
      <Flex padding="lg" width={1/2}>
        <FlexItem>A</FlexItem>
        <FlexItem>B</FlexItem>
        <FlexItem>C</FlexItem>
      </Flex>

      {/* Don't wrap Flex in a Box to apply spacing/sizing props:
        <Box padding="lg" width={1/2}>
          <Flex>
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        </Box>
      */}
    </div>`
};

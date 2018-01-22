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
import FlexItem from '../../components/FlexItem';
import Flex from '../../components/Flex';
import responsiveInstructions from '../../../Box/components/responsiveInstructions';

export default {
  id: 'responsive',
  title: 'Responsive',
  description: `Many of the properties for Flex can be responsive:

${responsiveInstructions}

The code in the example below exhibits the following behavior:

1. When the viewport is less than 800px wide, it will display as a column.
1. When the viewport is between 800px and 1024px (the 'wide' breakpoint theme
variable), it will still display as a column because of the \`null\` value.
1. When the viewport is at least 1024px wide, it will display as a row.`,
  scope: { Flex, FlexItem },
  source: `
    <Flex
      breakpoints={[800, 'wide']}
      direction={['column', null, 'row']}>
      <FlexItem>A</FlexItem>
      <FlexItem>B</FlexItem>
      <FlexItem>C</FlexItem>
    </Flex>`
};

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
  description: `Many of the properties for FlexItem can be responsive:

${responsiveInstructions}

The code in the example below exhibits the following behavior:

1. When the viewport is less than 800px wide, the third item will display next
to the second one.
1. When the viewport is at least 800px wide, the third item will be pushed to
the left edge of the container.

<Callout title="Heads Up">
  <p key={0}>
    Notice there is no <code key={0}>breakpoints</code> prop defined for each
    FlexItem below. <a href="../flex" key={1}>Flex</a> will automatically pass
    along any breakpoints defined to its FlexItem children. If a FlexItem has
    its own <code key={2}>breakpoints</code>, those will take precedence.
  </p>
</Callout>`,
  scope: { Flex, FlexItem },
  source: `
    <Flex breakpoints={[800]}>
      <FlexItem>A</FlexItem>
      <FlexItem>B</FlexItem>
      <FlexItem marginLeft={['sm', 'auto']}>C</FlexItem>
    </Flex>`
};

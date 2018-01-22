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
import DemoLayout from '../../components/DemoLayout';
import Flex from '../../components/Flex';

export default {
  id: 'gutters',
  title: 'Gutters',
  description: `Flex will add a default horizontal gap between items. Use the
\`gutterWidth\` prop to define a different value, including \`0\` to disable
gutters altogether.

_Numbers will be appended with \`px\`. String values will be passed directly._`,
  scope: { DemoLayout, Flex, FlexItem },
  source: `
    () => {
      const propValues = [
        'md', // default
        'xl',
        '1.5em',
        50,
        0
      ];

      const renderFlexes = () =>
        propValues.map((value, index) => (
          <Flex gutterWidth={value} key={index}>
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        ));

      return <DemoLayout>{renderFlexes()}</DemoLayout>;
    }`
};

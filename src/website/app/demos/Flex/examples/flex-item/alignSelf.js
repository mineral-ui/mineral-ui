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
import { createStyledComponent } from '../../../../../../styles';
import FlexItem from '../../components/FlexItem';
import DemoLayout from '../../components/DemoLayout';
import _Flex from '../../components/Flex';

const Flex = createStyledComponent(_Flex, ({ direction }) => ({
  height: direction ? null : '5rem'
}));

export default {
  id: 'align-self',
  title: 'Align Self',
  description: `[Flex's](../flex) [\`alignItems\`](../flex/#align-items) prop
will align its items along the cross axis. The \`alignSelf\` prop allows an
override of that value for specific items.`,
  scope: { DemoLayout, Flex, FlexItem },
  source: `
    () => {
      const propValues = [
        'stretch', // same as default from Flex
        'start',
        'center',
        'end'
      ];

      const renderFlexItems = () =>
        propValues.map((value, index) => (
          <FlexItem alignSelf={value} key={index}>
            {value}
          </FlexItem>
        ));

      return (
        <DemoLayout>
          <Flex>{renderFlexItems()}</Flex>
          <Flex direction="column">{renderFlexItems()}</Flex>
        </DemoLayout>
      );
    }`
};

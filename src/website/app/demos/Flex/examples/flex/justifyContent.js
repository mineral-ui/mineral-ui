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
import _DemoLayout from '../../components/DemoLayout';
import _Flex from '../../components/Flex';

const DemoLayout = _DemoLayout.withProps({ lastRowStartsAt: 10 });

const Flex = createStyledComponent(_Flex, ({ direction }) => {
  return direction === 'column'
    ? {
        float: 'left',
        height: '15rem',
        width: '30%',

        '&:not(:nth-child(3n))': {
          marginRight: '5%'
        }
      }
    : null;
});

export default {
  id: 'justify-content',
  title: 'Justify Content',
  description: `The \`justifyContent\` prop defines the alignment of items along
the main axis (horizontal, if \`direction\` is \`row\`; vertical, if
\`direction\` is \`column\`).`,
  scope: { DemoLayout, Flex, FlexItem },
  source: `
    () => {
      const propValues = [
        'start', // default
        'center',
        'end',
        'around',
        'between',
        'evenly'
      ];

      const renderFlexes = ({ column }) =>
        propValues.map((value, index) => (
          <Flex
            justifyContent={value}
            direction={column ? 'column' : 'row'}
            key={column ? 'c-' + index : index}>
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        ));

      return (
        <DemoLayout>
          {renderFlexes({ column: false })}
          {renderFlexes({ column: true })}
        </DemoLayout>
      );
    }`
};

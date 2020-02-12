/* @flow */
import styled from '@emotion/styled';
import _Flex from '../../common/DemoFlex';
import FlexItem from '../../common/DemoFlexItem';
import DemoLayout from '../../common/DemoLayout';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Flex: StyledComponent<{ [key: string]: any }> = styled(_Flex)(
  ({ direction }) => ({
    height: direction === 'column' ? null : '5rem'
  })
);

export default {
  id: 'align-self',
  title: 'Align Self',
  description: `[Flex's](/components/flex) [\`alignItems\`](/components/flex#align-items) prop
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

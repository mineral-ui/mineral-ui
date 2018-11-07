/* @flow */
import FlexItem from '../../common/DemoFlexItem';
import Flex from '../../common/DemoFlex';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use [Flex](/components/flex) and FlexItem to lay out components
throughout your app. They can be arranged side-by-side, stacked on top of one
another, sized proportionally, and lots more as illustrated in the further
examples below.`,
  scope: { Flex, FlexItem },
  source: `
    <Flex>
      <FlexItem>A</FlexItem>
      <FlexItem>B</FlexItem>
      <FlexItem>C</FlexItem>
    </Flex>`
};

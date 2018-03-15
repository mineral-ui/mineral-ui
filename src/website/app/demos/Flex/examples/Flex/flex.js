/* @flow */
import FlexItem from '../../components/FlexItem';
import Flex from '../../components/Flex';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use Flex and [FlexItem](/components/flex-item) to lay out components 
throughout your app. They can be arranged side-by-side, stacked on top of one
another, centered both horizontally and vertically, and lots more as
illustrated in the further examples below.`,
  scope: { Flex, FlexItem },
  source: `
    <Flex>
      <FlexItem>A</FlexItem>
      <FlexItem>B</FlexItem>
      <FlexItem>C</FlexItem>
    </Flex>`
};

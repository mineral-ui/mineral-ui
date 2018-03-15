/* @flow */
import FlexItem from '../../components/FlexItem';
import Flex from '../../components/Flex';

export default {
  id: 'box-props',
  title: 'Box Props',
  description: `Because FlexItem styles the [Box](/components/box) component, it accepts
any of [Box's props](/components/box#props).`,
  scope: { Flex, FlexItem },
  source: `
    <Flex>
      <FlexItem>A</FlexItem>
      <FlexItem marginRight="auto" padding="lg">B</FlexItem>
      <FlexItem>C</FlexItem>
    </Flex>`
};

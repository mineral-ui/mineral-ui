/* @flow */
import DemoLayout from '../../components/DemoLayout';
import FlexItem from '../../components/FlexItem';
import Flex from '../../components/Flex';

export default {
  id: 'grow',
  title: 'Grow',
  description: `By default, FlexItems will not expand to fill their container
(\`grow={0}\`). Setting the \`grow\` prop to a positive number allows you to
determine the rate at which they will expand, relative to their siblings.

For the simplest case where each item expands at the same rate, set \`grow={1}\`
on all FlexItems, as in the first row below. If different values are set, then
they grow proportionally. For example, the total of values for the items in the
third row below is 6. So the first item will fill 3/6 or 50% of the available
space, the second item will fill 2/6 or ~33%, and the last item will fill 1/6 or
~17%.`,
  scope: { DemoLayout, Flex, FlexItem },
  source: `
    <DemoLayout>
      <Flex>
        <FlexItem grow={1}>1</FlexItem>
        <FlexItem grow={1}>1</FlexItem>
        <FlexItem grow={1}>1</FlexItem>
      </Flex>
      <Flex>
        <FlexItem grow={1}>1</FlexItem>
        <FlexItem grow={0}>0</FlexItem>
        <FlexItem grow={0}>0</FlexItem>
      </Flex>
      <Flex>
        <FlexItem grow={3}>3</FlexItem>
        <FlexItem grow={2}>2</FlexItem>
        <FlexItem grow={1}>1</FlexItem>
      </Flex>
    </DemoLayout>`
};

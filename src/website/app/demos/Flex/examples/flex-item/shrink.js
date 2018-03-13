/* @flow */
import FlexItem from '../../components/FlexItem';
import Flex from '../../components/Flex';

export default {
  id: 'shrink',
  title: 'Shrink',
  description: `\`Shrink\` is the opposite of [\`grow\`](#grow), but uses the same
proportionality mechanic. By default, FlexItems shrink at an equal rate, e.g.
\`shrink={1}\`.`,
  scope: { Flex, FlexItem },
  source: `
    <Flex>
      <FlexItem shrink={3} width="100%">3</FlexItem>
      <FlexItem shrink={2} width="100%">2</FlexItem>
      <FlexItem shrink={1} width="100%">1</FlexItem>
    </Flex>`
};

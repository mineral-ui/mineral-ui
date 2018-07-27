/* @flow */
import { createStyledComponent } from '../../../../../../library/styles';
import _FlexItem from '../../components/FlexItem';
import Box from '../../../Box/components/Box';
import Flex from '../../components/Flex';

// Resetting some styles applied by _FlexItem's boxStyles
const FlexItem = createStyledComponent(
  _FlexItem,
  ({ alignItems, flex, justifyContent }) => ({
    alignItems: alignItems || 'flex-start',
    display: flex ? 'flex' : 'block',
    justifyContent: justifyContent || 'flex-start'
  })
);

export default {
  id: 'flex-props',
  title: 'Flex Props',
  description: `FlexItem can also be a [Flex](/components/flex). Setting the
\`flex\` prop to \`true\` will compose FlexItem from Flex, allowing it to accept
any of [Flex's props](/components/flex#props). This can reduce repetition when a
layout requires nested flex containers and flexed items.`,
  scope: { Box, Flex, FlexItem },
  source: `
    <Flex>
      <FlexItem flex alignItems="center" grow={1}>
        <FlexItem>A</FlexItem>
        <FlexItem>B</FlexItem>
      </FlexItem>
      <FlexItem>
        <Box>C</Box>
        <Box>D</Box>
      </FlexItem>
    </Flex>`
};

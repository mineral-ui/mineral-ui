/* @flow */
import Box from '../../../Box/common/DemoBox';
import FlexItem from '../../common/DemoFlexItem';
import Flex from '../../common/DemoFlex';

export default {
  id: 'box-props',
  title: 'Box Props',
  description: `Because Flex composes the [Box](/components/box) component, it
accepts any of [Box's props](/components/box#props).`,
  scope: { Box, Flex, FlexItem },
  source: `
    <div>
      {/* You can apply Box props directly to Flex: */}
      <Flex padding="lg" width={1/2}>
        <FlexItem>A</FlexItem>
        <FlexItem>B</FlexItem>
        <FlexItem>C</FlexItem>
      </Flex>

      {/* Don't wrap Flex in a Box to apply spacing/sizing props:
        <Box padding="lg" width={1/2}>
          <Flex>
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        </Box>
      */}
    </div>`
};

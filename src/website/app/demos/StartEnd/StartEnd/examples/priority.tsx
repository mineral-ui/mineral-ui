/* @flow */
import DemoLayout from '../../common/DemoLayout';
import Box from '../../../Box/common/DemoBox';
import StartEnd from '../../common/DemoStartEnd';

export default {
  id: 'priority',
  title: 'Priority',
  description: `By default, neither child will stretch to fill the available
width. Set the \`priority\` prop to choose which child, if any, will stretch.`,
  scope: { Box, DemoLayout, StartEnd },
  source: `
    <DemoLayout>
      <StartEnd priority="start">
        <Box>Start</Box>
        <Box>End</Box>
      </StartEnd>
      <StartEnd priority="end">
        <Box>Start</Box>
        <Box>End</Box>
      </StartEnd>
      <StartEnd priority="both">
        <Box>Start</Box>
        <Box>End</Box>
      </StartEnd>
    </DemoLayout>`
};

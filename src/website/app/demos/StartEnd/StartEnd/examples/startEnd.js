/* @flow */
import StartEnd from '../../common/DemoStartEnd';
import Box from '../../../Box/common/DemoBox';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `StartEnd arranges its children at the start (left, for
left-to-right languages) and end of a container.`,
  scope: { Box, StartEnd },
  source: `
    <StartEnd>
      <Box>Start</Box>
      <Box>End</Box>
    </StartEnd>`
};

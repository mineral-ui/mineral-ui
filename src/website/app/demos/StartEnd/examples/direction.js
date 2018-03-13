/* @flow */
import Box from '../../Box/components/Box';
import StartEnd from '../components/StartEnd';

export default {
  id: 'direction',
  title: 'Direction',
  description: `While the primary purpose of StartEnd is to arrange its children
on the left/right of a container, changing \`direction\` to \`column\` can be
helpful in [responsive scenarios](#responsive).`,
  scope: { Box, StartEnd },
  source: `
    <StartEnd direction="column">
      <Box>Start</Box>
      <Box>End</Box>
    </StartEnd>`
};

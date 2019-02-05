/* @flow */
import Box from '../../common/DemoBox';
import DemoLayout from '../../common/DemoLayout';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: 'Use Box to easily apply margin, padding, and/or width.',
  scope: { DemoLayout, Box },
  source: `
    <DemoLayout>
      <Box>A</Box>
      <Box padding="lg">B</Box>
      <Box marginRight="50%">C</Box>
      <Box marginHorizontal="auto" width="10em">D</Box>
    </DemoLayout>`
};

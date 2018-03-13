/* @flow */
import Box from '../components/Box';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'width',
  title: 'Width',
  description: `By default, (unless the [\`inline\` prop](#inline) is set to
\`true\`), Box will fill the available width. Set the \`width\` prop to define a
width instead.

_Numbers < 1, e.g. \`1/2\`, will be converted to a percentage. Numbers ≥ 1 will
be appended with \`px\`. String values, e.g. \`"4em"\` or \`"20%"\`, will be
passed directly._`,
  scope: { DemoLayout, Box },
  source: `
    <DemoLayout>
      <Box width="10em">A</Box>
      <Box width={100}>B</Box>
      <Box width={1/3}>C</Box>
    </DemoLayout>`
};

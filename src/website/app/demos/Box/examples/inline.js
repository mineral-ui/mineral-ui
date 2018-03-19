/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import Box from '../components/Box';
import _DemoLayout from '../components/DemoLayout';

const DemoLayout = createStyledComponent(_DemoLayout, {
  '& > *[class]': {
    marginBottom: 0
  }
});

export default {
  id: 'inline',
  title: 'Inline',
  description: `By default, Box renders as a block-level element. Use \`inline\`
to render as inline-block.`,
  scope: { DemoLayout, Box },
  source: `
    <DemoLayout>
      <Box inline>A</Box>
      <Box inline width={100}>B</Box>
      <Box inline>C</Box>
    </DemoLayout>`
};

/* @flow */
import Box from '../components/Box';
import responsiveInstructions from '../components/responsiveInstructions';

export default {
  id: 'responsive',
  title: 'Responsive',
  description: `Many of the properties for Box can be responsive:

${responsiveInstructions}

The code in the example below exhibits the following behavior:

1. When the viewport is less than 800px wide, it will have a right margin of
50px.
1. When the viewport is between 800px and 1024px (the 'wide' breakpoint theme
variable), it will have a right margin of 100px.
1. When the viewport is at least 1024px wide, it will have a right margin of
150px.`,
  scope: { Box },
  source: `
    <Box
      breakpoints={[800, 'wide']}
      marginRight={[50, 100, 150]}>
      A
    </Box>`
};

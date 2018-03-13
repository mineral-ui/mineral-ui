/* @flow */
import FlexItem from '../../components/FlexItem';
import Flex from '../../components/Flex';
import responsiveInstructions from '../../../Box/components/responsiveInstructions';

export default {
  id: 'responsive',
  title: 'Responsive',
  description: `Many of the properties for Flex can be responsive:

${responsiveInstructions}

The code in the example below exhibits the following behavior:

1. When the viewport is less than 800px wide, it will display as a column.
1. When the viewport is between 800px and 1024px (the 'wide' breakpoint theme
variable), it will still display as a column because of the \`null\` value.
1. When the viewport is at least 1024px wide, it will display as a row.`,
  scope: { Flex, FlexItem },
  source: `
    <Flex
      breakpoints={[800, 'wide']}
      direction={['column', null, 'row']}>
      <FlexItem>A</FlexItem>
      <FlexItem>B</FlexItem>
      <FlexItem>C</FlexItem>
    </Flex>`
};

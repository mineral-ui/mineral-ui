/* @flow */
import FlexItem from '../../components/FlexItem';
import Flex from '../../components/Flex';
import responsiveInstructions from '../../../Box/components/responsiveInstructions';

export default {
  id: 'responsive',
  title: 'Responsive',
  description: `Many of the properties for FlexItem can be responsive:

${responsiveInstructions}

The code in the example below exhibits the following behavior:

1. When the viewport is less than 800px wide, the third item will display next
to the second one.
1. When the viewport is at least 800px wide, the third item will be pushed to
the left edge of the container.

<Callout title="Heads Up">
  <p key={0}>
    Notice there is no <code key={0}>breakpoints</code> prop defined for each
    FlexItem below. <a href="/components/flex" key={1}>Flex</a> will automatically pass
    along any breakpoints defined to its FlexItem children. If a FlexItem has
    its own <code key={2}>breakpoints</code>, those will take precedence.
  </p>
</Callout>`,
  scope: { Flex, FlexItem },
  source: `
    <Flex breakpoints={[800]}>
      <FlexItem>A</FlexItem>
      <FlexItem>B</FlexItem>
      <FlexItem marginLeft={['sm', 'auto']}>C</FlexItem>
    </Flex>`
};

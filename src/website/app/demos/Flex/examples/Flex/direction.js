/* @flow */
import { createStyledComponent } from '../../../../../../library/styles';
import _DemoLayout from '../../components/DemoLayout';
import FlexItem from '../../components/FlexItem';
import _Flex from '../../components/Flex';

const DemoLayout = _DemoLayout.withProps({ lastRowStartsAt: 3 });

const Flex = createStyledComponent(_Flex, ({ direction }) => {
  return direction.indexOf('column') != -1
    ? {
        float: 'left',
        height: '12rem',
        width: '49%',

        '&:not(:last-child)': {
          marginRight: '4%'
        }
      }
    : null;
});

export default {
  id: 'direction',
  title: 'Direction',
  description: `Flex items can be laid out in a row (default) or column.
Additionally, their flow can be reversed.

<Callout title="Accessibility Note">
  <p key={0}>
    Exercise caution when using the "reverse" directions; they will flip
    the <em key={0}>visual</em> order while maintaining
    the <em key={1}>semantic</em> order. This can affect keyboard users because
    of a non-intuitive tab order as well as the order of content as recognized
    by <a href="https://webaccess.berkeley.edu/resources/assistive-technology" key={2}>assistive technologies</a>.
  </p>
</Callout>`,
  scope: { DemoLayout, Flex, FlexItem },
  source: `
    () => {
      const propValues = [
        'row', // default
        'row-reverse',
        'column',
        'column-reverse'
      ];

      const renderFlexes = () =>
        propValues.map((value, index) => (
          <Flex direction={value} key={index}>
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        ));

      return <DemoLayout>{renderFlexes()}</DemoLayout>;
    }`
};

/* @flow */
import { createStyledComponent } from '../../../../../../library/styles';
import FlexItem from '../../components/FlexItem';
import _DemoLayout from '../../components/DemoLayout';
import _Flex from '../../components/Flex';

const DemoLayout = _DemoLayout.withProps({ lastRowStartsAt: 10 });

const Flex = createStyledComponent(_Flex, ({ direction }) => {
  return direction === 'column'
    ? {
        float: 'left',
        height: '15rem',
        width: '30%',

        '&:not(:nth-child(3n))': {
          marginRight: '5%'
        }
      }
    : null;
});

export default {
  id: 'justify-content',
  title: 'Justify Content',
  description: `The \`justifyContent\` prop defines the alignment of items along
the main axis (horizontal, if \`direction\` is \`row\`; vertical, if
\`direction\` is \`column\`).`,
  scope: { DemoLayout, Flex, FlexItem },
  source: `
    () => {
      const propValues = [
        'start', // default
        'center',
        'end',
        'around',
        'between',
        'evenly'
      ];

      const renderFlexes = ({ column }) =>
        propValues.map((value, index) => (
          <Flex
            justifyContent={value}
            direction={column ? 'column' : 'row'}
            key={column ? 'c-' + index : index}>
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        ));

      return (
        <DemoLayout>
          {renderFlexes({ column: false })}
          {renderFlexes({ column: true })}
        </DemoLayout>
      );
    }`
};

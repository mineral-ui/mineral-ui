/* @flow */
import { createStyledComponent } from '../../../../../../library/styles';
import FlexItem from '../../components/FlexItem';
import _DemoLayout from '../../components/DemoLayout';
import _Flex from '../../components/Flex';

const DemoLayout = createStyledComponent(
  _DemoLayout,
  {},
  { withProps: { lastRowStartsAt: 5 } }
);

const Flex = createStyledComponent(_Flex, ({ direction }) => {
  return direction === 'column'
    ? {
        float: 'left',
        height: '11rem',
        width: '21%',

        '&:not(:last-child)': {
          marginRight: '5%'
        }
      }
    : {
        height: '5rem'
      };
});

export default {
  id: 'align-items',
  title: 'Align Items',
  description: `The \`alignItems\` prop defines the alignment of items along
the cross axis (vertical, if \`direction\` is \`row\`; horizontal, if
\`direction\` is \`column\`).`,
  scope: { DemoLayout, Flex, FlexItem },
  source: `
    () => {
      const propValues = [
        'stretch', // default
        'start',
        'center',
        'end'
      ];

      const renderFlexes = ({ column }) => (
        propValues.map((value, index) => (
          <Flex
            alignItems={value}
            direction={column ? 'column' : 'row'}
            key={column ? 'c-' + index : index}>
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        ))
      );

      return (
        <DemoLayout>
          { renderFlexes({ column: false }) }
          { renderFlexes({ column: true }) }
        </DemoLayout>
      )
    }`
};

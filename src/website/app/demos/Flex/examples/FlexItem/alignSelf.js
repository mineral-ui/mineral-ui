/* @flow */
import { createStyledComponent } from '../../../../../../library/styles';
import FlexItem from '../../components/FlexItem';
import DemoLayout from '../../components/DemoLayout';
import _Flex from '../../components/Flex';

const Flex = createStyledComponent(_Flex, ({ direction }) => ({
  height: direction === 'column' ? null : '5rem'
}));

export default {
  id: 'align-self',
  title: 'Align Self',
  description: `[Flex's](/components/flex) [\`alignItems\`](/components/flex#align-items) prop
will align its items along the cross axis. The \`alignSelf\` prop allows an
override of that value for specific items.`,
  scope: { DemoLayout, Flex, FlexItem },
  source: `
    () => {
      const propValues = [
        'stretch', // same as default from Flex
        'start',
        'center',
        'end'
      ];

      const renderFlexItems = () =>
        propValues.map((value, index) => (
          <FlexItem alignSelf={value} key={index}>
            {value}
          </FlexItem>
        ));

      return (
        <DemoLayout>
          <Flex>{renderFlexItems()}</Flex>
          <Flex direction="column">{renderFlexItems()}</Flex>
        </DemoLayout>
      );
    }`
};

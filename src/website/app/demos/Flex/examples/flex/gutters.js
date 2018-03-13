/* @flow */
import FlexItem from '../../components/FlexItem';
import DemoLayout from '../../components/DemoLayout';
import Flex from '../../components/Flex';

export default {
  id: 'gutters',
  title: 'Gutters',
  description: `Flex will add a default horizontal gap between items. Use the
\`gutterWidth\` prop to define a different value, including \`0\` to disable
gutters altogether.

_Numbers will be appended with \`px\`. String values will be passed directly._`,
  scope: { DemoLayout, Flex, FlexItem },
  source: `
    () => {
      const propValues = [
        'md', // default
        'xl',
        '1.5em',
        50,
        0
      ];

      const renderFlexes = () =>
        propValues.map((value, index) => (
          <Flex gutterWidth={value} key={index}>
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        ));

      return <DemoLayout>{renderFlexes()}</DemoLayout>;
    }`
};

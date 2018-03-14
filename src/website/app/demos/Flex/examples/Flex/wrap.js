/* @flow */
import React from 'react';
import _FlexItem from '../../components/FlexItem';
import Flex from '../../components/Flex';

const FlexItem = (props: {}) => <_FlexItem width="15em" {...props} />;

export default {
  id: 'wrap',
  title: 'Wrapping',
  description: `Flex items can optionally wrap to multiple lines along the main
axis.`,
  scope: { Flex, FlexItem },
  source: `
    <Flex wrap>
      <FlexItem>A</FlexItem>
      <FlexItem>B</FlexItem>
      <FlexItem>C</FlexItem>
      <FlexItem>D</FlexItem>
      <FlexItem>E</FlexItem>
    </Flex>`
};

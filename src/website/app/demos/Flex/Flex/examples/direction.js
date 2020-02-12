/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import _Flex from '../../common/DemoFlex';
import FlexItem from '../../common/DemoFlexItem';
import _DemoLayout from '../../common/DemoLayout';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const DemoLayout = (props: Object) => (
  <_DemoLayout lastRowStartsAt={3} {...props} />
);

const Flex: StyledComponent<{ [key: string]: any }> = styled(_Flex)(
  ({ direction }) => {
    return direction.indexOf('column') != -1
      ? {
          float: 'left',
          height: '12rem',
          width: '48%',

          '&:not(:last-child)': {
            marginRight: '4%'
          }
        }
      : null;
  }
);

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

/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import _Grid from '../../common/DemoGrid';
import GridItem from '../../common/DemoGridItem';
import _DemoLayout from '../../common/DemoLayout';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const DemoLayout = (props: Object) => (
  <_DemoLayout lastRowStartsAt={5} {...props} />
);

const Grid: StyledComponent<{ [key: string]: any }> = styled(_Grid)({
  height: '5rem'
});

export default {
  id: 'align-items',
  title: 'Align Items',
  description: `The \`alignItems\` prop defines the alignment of items along
the vertical axis.`,
  scope: { DemoLayout, Grid, GridItem },
  source: `
    () => {
      const propValues = [
        'stretch', // default
        'start',
        'center',
        'end'
      ];

      const renderGrids = () => (
        propValues.map((value, index) => (
          <Grid alignItems={value} key={index}>
            <GridItem>A</GridItem>
            <GridItem>B</GridItem>
            <GridItem>C</GridItem>
          </Grid>
        ))
      );

      return (
        <DemoLayout>
          { renderGrids() }
        </DemoLayout>
      )
    }`
};

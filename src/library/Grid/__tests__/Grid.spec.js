/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import testDemoExamples from '../../../../utils/testDemoExamples';
import Grid, { GridItem } from '../../Grid';
import examples from '../../../website/app/demos/Grid/examples/Grid';

function shallowGrid(gridProps, gridItemProps) {
  return shallow(
    <Grid {...gridProps}>
      <GridItem {...gridItemProps} />
    </Grid>
  );
}

describe('Grid', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const grid = shallowGrid({}, {});

    expect(grid.exists()).toEqual(true);
  });
});

/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import testDemoExamples from '../../../../utils/testDemoExamples';
import { GridItem } from '../../Grid';
import examples from '../../../website/app/demos/Grid/examples/GridItem';

function shallowGridItem(props = {}) {
  return shallow(<GridItem {...props} />);
}

describe('GridItem', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const gridItem = shallowGridItem();

    expect(gridItem.exists()).toEqual(true);
  });
});

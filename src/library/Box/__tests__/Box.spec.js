/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import testDemoExamples from '../../../../utils/testDemoExamples';
import Box from '../Box';
import examples from '../../../website/app/demos/Box/examples';

function shallowBox(props) {
  return shallow(<Box {...props} />);
}

describe('Box', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const box = shallowBox({});

    expect(box.exists()).toEqual(true);
  });
});

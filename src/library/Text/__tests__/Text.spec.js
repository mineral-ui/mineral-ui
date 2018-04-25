/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Text from '../Text';
import examples from '../../../website/app/demos/Text/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowText(props) {
  return shallow(<Text {...props}>A</Text>);
}

describe('Text', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const text = shallowText({});

    expect(text.exists()).toEqual(true);
  });
});

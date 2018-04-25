/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Radio from '../Radio';
import examples from '../../../website/app/demos/Radio/examples/Radio';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowRadio() {
  return shallow(<Radio label="example" />);
}

describe('Radio', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const radio = shallowRadio();

    expect(radio.exists()).toEqual(true);
  });
});

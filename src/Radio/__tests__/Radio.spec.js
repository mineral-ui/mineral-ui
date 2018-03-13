/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Radio from '../Radio';
import examples from '../../website/app/demos/Radio/examples';
import testDemoExamples from '../../../utils/testDemoExamples';

function shallowRadio() {
  return shallow(<Radio label="example" />);
}

describe('Radio', () => {
  it('renders', () => {
    const radio = shallowRadio();

    expect(radio.exists()).toEqual(true);
  });

  testDemoExamples(examples);
});

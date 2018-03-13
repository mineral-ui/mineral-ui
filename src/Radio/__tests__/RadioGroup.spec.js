/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import RadioGroup from '../RadioGroup';
import examples from '../../website/app/demos/Radio/examples/radio-group';
import testDemoExamples from '../../../utils/testDemoExamples';

function shallowRadioGroup() {
  return shallow(<RadioGroup name="example" />);
}

describe('RadioGroup', () => {
  it('renders', () => {
    const radioGroup = shallowRadioGroup();

    expect(radioGroup.exists()).toEqual(true);
  });

  testDemoExamples(examples);
});

/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CheckboxGroup from '../CheckboxGroup';
import examples from '../../website/app/demos/Checkbox/examples/checkbox-group';
import testDemoExamples from '../../../utils/testDemoExamples';

function shallowCheckboxGroup() {
  return shallow(<CheckboxGroup name="example" />);
}

describe('CheckboxGroup', () => {
  it('renders', () => {
    const checkboxGroup = shallowCheckboxGroup();

    expect(checkboxGroup.exists()).toEqual(true);
  });

  testDemoExamples(examples);
});
